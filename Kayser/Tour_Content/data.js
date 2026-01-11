var APP_DATA = {
    "scenes": [
        {
            "id": "0-dinning-kitchen",
            "name": "Dinning-Kitchen",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "yaw": 0.7900534769830241,
                "pitch": 0.31192780282994903,
                "fov": 1.4319388366908425
            },
            "linkHotspots": [
                {
                    "yaw": -1.6887013864212008,
                    "pitch": 0.5539318475367381,
                    "rotation": 0,
                    "target": "4-kitchen"
                },
                {
                    "yaw": -2.951290874366908,
                    "pitch": 0.6341861578044181,
                    "rotation": 0,
                    "target": "2-living"
                }
            ],
            "infoHotspots": [],
            "overlay": {
                "id": "1-empty-dinning-kitchen",
                "name": "empty-Dinning-Kitchen"
            }
        },
        {
            "id": "2-living",
            "name": "Living",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": -0.12106411048353749,
                    "pitch": 0.4235020976144348,
                    "rotation": 0,
                    "target": "0-dinning-kitchen"
                },
                {
                    "yaw": -0.6730740122844097,
                    "pitch": 0.49655812517203657,
                    "rotation": 11.780972450961727,
                    "target": "4-kitchen"
                }
            ],
            "infoHotspots": [],
            "overlay": {
                "id": "3-empty-living",
                "name": "empty-Living"
            }
        },
        {
            "id": "4-kitchen",
            "name": "Kitchen",
            "levels": [
                {
                    "tileSize": 256,
                    "size": 256,
                    "fallbackOnly": true
                },
                {
                    "tileSize": 512,
                    "size": 512
                },
                {
                    "tileSize": 512,
                    "size": 1024
                },
                {
                    "tileSize": 512,
                    "size": 2048
                }
            ],
            "faceSize": 2000,
            "initialViewParameters": {
                "pitch": 0,
                "yaw": 0,
                "fov": 1.5707963267948966
            },
            "linkHotspots": [
                {
                    "yaw": 1.3706181481266597,
                    "pitch": 0.6717485696673791,
                    "rotation": 5.497787143782138,
                    "target": "0-dinning-kitchen"
                },
                {
                    "yaw": 2.233583800485219,
                    "pitch": 0.6059900149448438,
                    "rotation": 0.7853981633974483,
                    "target": "0-dinning-kitchen"
                }
            ],
            "infoHotspots": [],
            "overlay": {
                "id": "5-empty-kitchen",
                "name": "empty-Kitchen"
            }
        }
    ],
    "name": "Project Title",
    "settings": {
        "mouseViewMode": "drag",
        "autorotateEnabled": true,
        "fullscreenButton": true,
        "viewControlButtons": true
    }
};