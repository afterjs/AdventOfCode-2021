local open = io.open

local Split = function(s, delimiter)
    result = {};
    for match in (s .. delimiter):gmatch("(.-)" .. delimiter) do
        table.insert(result, match);
    end
    return result;
end

local multiplyPosition = function(commands)
    horizontal = 0;
    depth = {}
    aim = 0;
    depth[0] = 0;
    depth[1] = 0;

    for i = 1, #commands do
        commandSplit = Split(commands[i], " ")
        cmdStr = commandSplit[1]
        val = commandSplit[2]

        if (cmdStr == "forward") then
            horizontal = horizontal + val
            depth[1] = depth[1] + (aim * val)
        elseif (cmdStr == "down") then
            aim = aim + val
            depth[0] = depth[0] + val
        elseif (cmdStr == "up") then
            aim = aim - val
            depth[0] = depth[0] - val
        end
    end

    print("Part 1 -> " .. horizontal * depth[0] .. " | Part 2 --> " .. horizontal * depth[1])
end

local read_file = function(path)

    local file = open(path, "rb")
    if not file then
        return nil
    end
    local content = file:read "*a"
    file:close()
    commands = Split(content, "\n")
    multiplyPosition(commands)
end

read_file("input.txt");
