var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.7173530426343646,
        "pitch": 0.010673519722352864,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -2.5011225475968484,
          "pitch": 0.4288177266084148,
          "rotation": 0,
          "target": "2-living-area"
        },
        {
          "yaw": 1.3865173126937371,
          "pitch": 0.26312682157345435,
          "rotation": 0,
          "target": "6-bedroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.06824051561770439,
          "pitch": 0.5851164715059234,
          "title": "WC",
          "text": "<br>"
        },
        {
          "yaw": -0.6474027011896393,
          "pitch": 0.8234040751323057,
          "title": "AR",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-dinning",
      "name": "Dinning",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.022263501180504,
        "pitch": 0.26410862145311853,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.6372111854643254,
          "pitch": 0.48472179579176,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": 0.18547725440745388,
          "pitch": 0.5604839001810475,
          "rotation": 5.497787143782138,
          "target": "2-living-area"
        },
        {
          "yaw": -2.0742371021171735,
          "pitch": 0.530928227034364,
          "rotation": 0.7853981633974483,
          "target": "3-kitchen"
        },
        {
          "yaw": 2.3353531504203433,
          "pitch": 0.4120854912890799,
          "rotation": 0,
          "target": "4-terrace"
        },
        {
          "yaw": 1.2538966714909527,
          "pitch": 0.28147175202566643,
          "rotation": 0.7853981633974483,
          "target": "5-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-area",
      "name": "Living area",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.2291162319374838,
        "pitch": 0.40146375457099026,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.6178166652513521,
          "pitch": 0.6104133937012861,
          "rotation": 5.497787143782138,
          "target": "0-entrance"
        },
        {
          "yaw": 2.5001265682219245,
          "pitch": 0.16303862034434857,
          "rotation": 0,
          "target": "5-office"
        },
        {
          "yaw": 3.09340085365005,
          "pitch": 0.5176767990272104,
          "rotation": 0,
          "target": "1-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.8436758979775068,
        "pitch": 0.22652631014021196,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.110576795765801,
          "pitch": 0.6881170448827358,
          "rotation": 5.497787143782138,
          "target": "1-dinning"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terrace",
      "name": "Terrace",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.7441218160125356,
        "pitch": 0.06346895860480828,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.7591562462046646,
          "pitch": 0.539001283153592,
          "rotation": 0,
          "target": "1-dinning"
        },
        {
          "yaw": 0.2932718723373853,
          "pitch": 0.5848874442458509,
          "rotation": 0,
          "target": "5-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-office",
      "name": "Office",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.8741755188867906,
        "pitch": 0.1653123064816011,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.9888618591386091,
          "pitch": 0.22874506054130705,
          "rotation": 0,
          "target": "1-dinning"
        },
        {
          "yaw": -2.7577901293379874,
          "pitch": 0.683006602857219,
          "rotation": 0,
          "target": "4-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom",
      "name": "Bedroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.2572370778900481,
        "pitch": 0.3283478113824252,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -2.7253553497387912,
          "pitch": 0.2826145105712019,
          "rotation": 0,
          "target": "7-bathroom"
        },
        {
          "yaw": -0.6646972180065553,
          "pitch": 0.25772952661598225,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bathroom",
      "name": "Bathroom",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.9175570012551244,
        "pitch": 0.12985732504333214,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.2196151774372801,
          "pitch": 0.3164513277779797,
          "rotation": 0,
          "target": "6-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "RP Immo - Sonnberg Top 4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
