// Extension metadata
const extension = {
    id: 'hexConverter',
    name: 'Hex Converter',
    blocks: [
        {
            opcode: 'toHex',
            blockType: 'reporter',
            text: 'convert [NUMBER] to hex',
            arguments: {
                NUMBER: {
                    type: 'number',
                    defaultValue: 0
                }
            },
            function: (args) => {
                return args.NUMBER.toString(16).toUpperCase();  // Converts to hex (uppercase)
            }
        },
        {
            opcode: 'fromHex',
            blockType: 'reporter',
            text: 'convert [HEX] to number',
            arguments: {
                HEX: {
                    type: 'string',
                    defaultValue: '0'
                }
            },
            function: (args) => {
                return parseInt(args.HEX, 16);  // Converts from hex to number
            }
        }
    ],
    // Optional: Define the info method
    getInfo: () => ({
        id: 'hexConverter',
        name: 'Hex Converter',
        blocks: [
            {
                opcode: 'toHex',
                blockType: 'reporter',
                text: 'convert [NUMBER] to hex',
                arguments: {
                    NUMBER: {
                        type: 'number',
                        defaultValue: 0
                    }
                },
                function: (args) => {
                    return args.NUMBER.toString(16).toUpperCase();
                }
            },
            {
                opcode: 'fromHex',
                blockType: 'reporter',
                text: 'convert [HEX] to number',
                arguments: {
                    HEX: {
                        type: 'string',
                        defaultValue: '0'
                    }
                },
                function: (args) => {
                    return parseInt(args.HEX, 16);
                }
            }
        ]
    })
};

// Register the extension
Scratch.extensions.register(extension);
