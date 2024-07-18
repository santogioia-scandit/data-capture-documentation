import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually

	sdcSidebar: [
		{
			type: 'category',
			label: 'Scandit Smart Data Capture',
			items: [
				'basics',
				'core-concepts',
				'features-by-framework',
        'system-requirements',
				// 'best-practices-for-usability',
				{
					type: 'category',
					label: 'Barcode Symbologies',
					link: {
						type: 'doc',
						id: 'barcode-symbologies',
					},
					items: ['symbology-properties','extension-codes', 'scanning-composite-codes'],
				},
			],
		},
	],

	expressSidebar: [
		{
			type: 'category',
			label: 'Scandit Express',
			items: [
				'hosted/express/overview',
				'hosted/express/getting-started',
        'hosted/express/rollout',
				{
					type: 'link',
					label: 'FAQ',
					href: 'https://support.scandit.com/hc/en-us/categories/7348049917596-Scandit-Express',
				},
			],
		},
	],

  boltSidebar: [
		{
			type: 'category',
			label: 'ID Bolt',
			items: [
				'hosted/id-bolt/overview',
				'hosted/id-bolt/getting-started',
        'hosted/id-bolt/api',
				{
					type: 'link',
					label: 'Try the Demo',
					href: 'https://id-travel.demos.scandit.com/',
				},
			],
		},
	],

  iosSidebar: [
    {
      type: "category",
      label: "iOS Getting Started",
      items: ["sdks/ios/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/ios/sparkscan/intro",
            "sdks/ios/sparkscan/get-started",
            "sdks/ios/sparkscan/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/ios/matrixscan-count/intro",
            "sdks/ios/matrixscan-count/get-started",
            "sdks/ios/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Find",
          items: [
            "sdks/ios/matrixscan-find/intro",
            "sdks/ios/matrixscan-find/get-started",
            "sdks/ios/matrixscan-find/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/ios/barcode-selection/intro",
            "sdks/ios/barcode-selection/get-started",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/ios/id-capture/intro",
            "sdks/ios/id-capture/get-started",
            "sdks/ios/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/ios/matrixscan/intro",
            "sdks/ios/matrixscan/get-started",
            "sdks/ios/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/ios/barcode-capture/get-started",
            "sdks/ios/barcode-capture/configure-barcode-symbologies",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/ios/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/ios/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/ios/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/ios/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditLabelCapture",
          href: "https://docs.scandit.com/data-capture-sdk/ios/label-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/ios/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/ios/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/ios/release-notes',
    },
  ],

  androidSidebar: [
    {
      type: "category",
      label: "Android Getting Started",
      items: [
          "sdks/android/add-sdk",
          "sdks/android/samples",
      ],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/android/sparkscan/intro",
            "sdks/android/sparkscan/get-started",
            "sdks/android/sparkscan/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/android/matrixscan-count/intro",
            "sdks/android/matrixscan-count/get-started",
            "sdks/android/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Find",
          items: [
            "sdks/android/matrixscan-find/intro",
            "sdks/android/matrixscan-find/get-started",
            "sdks/android/matrixscan-find/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/android/barcode-selection/intro",
            "sdks/android/barcode-selection/get-started",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/android/id-capture/intro",
            "sdks/android/id-capture/get-started",
            "sdks/android/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/android/matrixscan/intro",
            "sdks/android/matrixscan/get-started",
            "sdks/android/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/android/barcode-capture/get-started",
            "sdks/android/barcode-capture/configure-barcode-symbologies",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/android/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/android/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/android/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/android/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditLabelCapture",
          href: "https://docs.scandit.com/data-capture-sdk/android/label-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/android/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/android/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/android/release-notes',
    },
  ],

  webSidebar: [
    {
      type: "category",
      label: "Web Getting Started",
      items: ["sdks/web/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/web/sparkscan/intro",
            "sdks/web/sparkscan/get-started",
            "sdks/web/sparkscan/advanced",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/web/id-capture/intro",
            "sdks/web/id-capture/get-started",
            "sdks/web/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/web/matrixscan/intro",
            "sdks/web/matrixscan/get-started",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/web/barcode-capture/get-started",
            "sdks/web/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/web/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/web/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/web/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/web/id-capture/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/web/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/web/release-notes',
    },
  ],

  cordovaSidebar: [
    {
      type: "category",
      label: "Cordova Getting Started",
      items: ["sdks/cordova/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/cordova/sparkscan/intro",
            "sdks/cordova/sparkscan/get-started",
            "sdks/cordova/sparkscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/cordova/barcode-selection/intro",
            "sdks/cordova/barcode-selection/get-started",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/cordova/id-capture/intro",
            "sdks/cordova/id-capture/get-started",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/cordova/matrixscan/intro",
            "sdks/cordova/matrixscan/get-started",
            "sdks/cordova/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/cordova/barcode-capture/get-started",
            "sdks/cordova/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/cordova/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/cordova/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/cordova/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/cordova/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/cordova/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/cordova/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/cordova/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/cordova/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/cordova/release-notes',
    },
  ],

  reactnativeSidebar: [
    {
      type: "category",
      label: "React Native Getting Started",
      items: ["sdks/react-native/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/react-native/sparkscan/intro",
            "sdks/react-native/sparkscan/get-started",
            "sdks/react-native/sparkscan/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/react-native/matrixscan-count/intro",
            "sdks/react-native/matrixscan-count/get-started",
            "sdks/react-native/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Find",
          items: [
            "sdks/react-native/matrixscan-find/intro",
            "sdks/react-native/matrixscan-find/get-started",
            "sdks/react-native/matrixscan-find/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/react-native/barcode-selection/intro",
            "sdks/react-native/barcode-selection/get-started",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/react-native/id-capture/intro",
            "sdks/react-native/id-capture/get-started",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/react-native/matrixscan/intro",
            "sdks/react-native/matrixscan/get-started",
            "sdks/react-native/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/react-native/barcode-capture/get-started",
            "sdks/react-native/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/react-native/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/react-native/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/react-native/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/react-native/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/react-native/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/react-native/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditLabelCapture",
          href: "https://docs.scandit.com/data-capture-sdk/react-native/label-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/react-native/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/react-native/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/react-native/release-notes',
    },
  ],

  flutterSidebar: [
    {
      type: "category",
      label: "Flutter Getting Started",
      items: ["sdks/flutter/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/flutter/sparkscan/intro",
            "sdks/flutter/sparkscan/get-started",
            "sdks/flutter/sparkscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/flutter/barcode-selection/intro",
            "sdks/flutter/barcode-selection/get-started",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/flutter/matrixscan-count/intro",
            "sdks/flutter/matrixscan-count/get-started",
            "sdks/flutter/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Find",
          items: [
            "sdks/flutter/matrixscan-find/intro",
            "sdks/flutter/matrixscan-find/get-started",
            "sdks/flutter/matrixscan-find/advanced",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/flutter/id-capture/intro",
            "sdks/flutter/id-capture/get-started",
            "sdks/flutter/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/flutter/matrixscan/intro",
            "sdks/flutter/matrixscan/get-started",
            "sdks/flutter/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/flutter/barcode-capture/get-started",
            "sdks/flutter/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/flutter/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/flutter/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/flutter/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/flutter/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/flutter/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/flutter/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/flutter/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/flutter/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/flutter/release-notes',
    },
  ],

  capacitorSidebar: [
    {
      type: "category",
      label: "Capacitor Getting Started",
      items: ["sdks/capacitor/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/capacitor/sparkscan/intro",
            "sdks/capacitor/sparkscan/get-started",
            "sdks/capacitor/sparkscan/advanced",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/capacitor/id-capture/intro",
            "sdks/capacitor/id-capture/get-started",
            "sdks/capacitor/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/capacitor/matrixscan/intro",
            "sdks/capacitor/matrixscan/get-started",
            "sdks/capacitor/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/capacitor/barcode-capture/get-started",
            "sdks/capacitor/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/capacitor/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/capacitor/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/capacitor/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/capacitor/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/capacitor/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/capacitor/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/capacitor/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/capacitor/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/capacitor/release-notes',
    },
  ],

  titaniumSidebar: [
    {
      type: "category",
      label: "Titanium Getting Started",
      items: ["sdks/titanium/add-sdk"],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/titanium/barcode-capture/get-started",
            "sdks/titanium/barcode-capture/configure-barcode-symbologies",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/titanium/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/titanium/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/titanium/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/titanium/release-notes',
    },
  ],

  xamarinIosSidebar: [
    {
      type: "category",
      label: "Xamarin iOS Getting Started",
      items: ["sdks/xamarin/ios/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/xamarin/ios/barcode-selection/intro",
            "sdks/xamarin/ios/barcode-selection/get-started",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/xamarin/ios/matrixscan-count/intro",
            "sdks/xamarin/ios/matrixscan-count/get-started",
            "sdks/xamarin/ios/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/xamarin/ios/sparkscan/intro",
            "sdks/xamarin/ios/sparkscan/get-started",
            "sdks/xamarin/ios/sparkscan/advanced",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/xamarin/ios/id-capture/intro",
            "sdks/xamarin/ios/id-capture/get-started",
            "sdks/xamarin/ios/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/xamarin/ios/matrixscan/intro",
            "sdks/xamarin/ios/matrixscan/get-started",
            "sdks/xamarin/ios/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/xamarin/ios/barcode-capture/get-started",
            "sdks/xamarin/ios/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/xamarin/ios/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/xamarin/ios/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.ios/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.ios/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.ios/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.ios/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.ios/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.ios/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/xamarin/ios/release-notes',
    },
  ],

  xamarinAndroidSidebar: [
    {
      type: "category",
      label: "Xamarin Android Getting Started",
      items: ["sdks/xamarin/android/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/xamarin/android/barcode-selection/intro",
            "sdks/xamarin/android/barcode-selection/get-started",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/xamarin/android/matrixscan-count/intro",
            "sdks/xamarin/android/matrixscan-count/get-started",
            "sdks/xamarin/android/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/xamarin/android/sparkscan/intro",
            "sdks/xamarin/android/sparkscan/get-started",
            "sdks/xamarin/android/sparkscan/advanced",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/xamarin/android/id-capture/intro",
            "sdks/xamarin/android/id-capture/get-started",
            "sdks/xamarin/android/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/xamarin/android/matrixscan/intro",
            "sdks/xamarin/android/matrixscan/get-started",
            "sdks/xamarin/android/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/xamarin/android/barcode-capture/get-started",
            "sdks/xamarin/android/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/xamarin/android/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/xamarin/android/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.android/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.android/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.android/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.android/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.android/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.android/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/xamarin/android/release-notes',
    },
  ],

  xamarinFormsSidebar: [
    {
      type: "category",
      label: "Xamarin Forms Getting Started",
      items: ["sdks/xamarin/forms/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/xamarin/forms/barcode-selection/intro",
            "sdks/xamarin/forms/barcode-selection/get-started",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/xamarin/forms/matrixscan-count/intro",
            "sdks/xamarin/forms/matrixscan-count/get-started",
            "sdks/xamarin/forms/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "SparkScan",
          items: [
            "sdks/xamarin/forms/sparkscan/intro",
            "sdks/xamarin/forms/sparkscan/get-started",
            "sdks/xamarin/forms/sparkscan/advanced",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/xamarin/forms/id-capture/intro",
            "sdks/xamarin/forms/id-capture/get-started",
            "sdks/xamarin/forms/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/xamarin/forms/matrixscan/intro",
            "sdks/xamarin/forms/matrixscan/get-started",
            "sdks/xamarin/forms/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/xamarin/forms/barcode-capture/get-started",
            "sdks/xamarin/forms/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/xamarin/forms/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/xamarin/forms/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.forms/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.forms/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.forms/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.forms/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.forms/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/xamarin.forms/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/xamarin/forms/release-notes',
    },
  ],

  netIosSidebar: [
    {
      type: "category",
      label: ".NET Getting Started",
      items: ["sdks/net/ios/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/net/ios/barcode-selection/intro",
            "sdks/net/ios/barcode-selection/get-started",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/net/ios/matrixscan-count/intro",
            "sdks/net/ios/matrixscan-count/get-started",
            "sdks/net/ios/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Find",
          items: [
            "sdks/net/ios/matrixscan-find/intro",
            "sdks/net/ios/matrixscan-find/get-started",
            "sdks/net/ios/matrixscan-find/advanced",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/net/ios/id-capture/intro",
            "sdks/net/ios/id-capture/get-started",
            "sdks/net/ios/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/net/ios/matrixscan/intro",
            "sdks/net/ios/matrixscan/get-started",
            "sdks/net/ios/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/net/ios/barcode-capture/get-started",
            "sdks/net/ios/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/net/ios/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/net/ios/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.ios/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.ios/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.ios/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.ios/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.ios/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.ios/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/net/ios/release-notes',
    },
  ],

  netAndroidSidebar: [
    {
      type: "category",
      label: ".NET Getting Started",
      items: ["sdks/net/android/add-sdk"],
    },
    {
      type: "category",
      label: "Pre-built Components",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "Barcode Selection",
          items: [
            "sdks/net/android/barcode-selection/intro",
            "sdks/net/android/barcode-selection/get-started",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Count",
          items: [
            "sdks/net/android/matrixscan-count/intro",
            "sdks/net/android/matrixscan-count/get-started",
            "sdks/net/android/matrixscan-count/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan Find",
          items: [
            "sdks/net/android/matrixscan-find/intro",
            "sdks/net/android/matrixscan-find/get-started",
            "sdks/net/android/matrixscan-find/advanced",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Fully-customizable API",
      collapsed: false,
      items: [
        {
          type: "category",
          label: "ID Capture",
          items: [
            "sdks/net/android/id-capture/intro",
            "sdks/net/android/id-capture/get-started",
            "sdks/net/android/id-capture/advanced",
          ],
        },
        {
          type: "category",
          label: "MatrixScan",
          items: [
            "sdks/net/android/matrixscan/intro",
            "sdks/net/android/matrixscan/get-started",
            "sdks/net/android/matrixscan/advanced",
          ],
        },
        {
          type: "category",
          label: "Barcode Capture",
          items: [
            "sdks/net/android/barcode-capture/get-started",
            "sdks/net/android/barcode-capture/configure-barcode-symbologies",
          ],
        },
        {
          type: "category",
          label: "Text Capture",
          items: ["sdks/net/android/text-capture/get-started"],
        },
        {
          type: "category",
          label: "Parse Barcode Data",
          items: ["sdks/net/android/parse-barcode-data/get-started"],
        },
      ],
    },
    {
      type: "category",
      label: "API Reference",
      items: [
        {
          type: "link",
          label: "ScanditCaptureCore",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.android/core/api.html",
        },
        {
          type: "link",
          label: "ScanditBarcodeCapture",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.android/barcode-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditIdCapture",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.android/id-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditTextCapture",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.android/text-capture/api.html",
        },
        {
          type: "link",
          label: "ScanditParser",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.android/parser/api.html",
        },
        {
          type: "link",
          label: "Index",
          href: "https://docs.scandit.com/data-capture-sdk/dotnet.android/genindex.html",
        },
      ],
    },
    {
      type: 'doc',
      label: 'Release Notes',
      id: 'sdks/net/android/release-notes',
    },
  ],
};

export default sidebars;
