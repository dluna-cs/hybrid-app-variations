var CS_CONF={
    "trackWithSdk": 1,
    // TODO: use the proper projectID? maybe not needed
    "projectId":27376,
    "status":1,
    "hostnames":[""],
    "crossDomainTracking":0,
    "crossDomainSingleIframeTracking":0,
    "consentRequired":1,
    "allowSubdomains":1,
    "visitorCookieTimeout":34164000000,
    // track always on WebView and led SDK decide?
    "sampleRate":100,
    "replayRecordingRate":0,
    "validationRate":1,
    "lastTrackingDraw":null,
    "trackerDomain":"c.contentsquare.net",
    "recordingDomain":"r.contentsquare.net",
    "useMalkaPipeline":1,
    "ed":"l.contentsquare.net/log/web",
    "eMerchandisingEnabled":0,
    "mouseMoveHeatmapEnabled":0,
    "autoInsightsEnabled":1,
    // track all types of errors
    "jsErrorsEnabled":1,
    "customErrorsEnabled":1,
    "jsCustomErrorsEnabled":1,
    "apiErrorsEnabled":1,
    "customHashIdEnabled":0,
    "recordingEncryptionEnabled":0,
    "recordingEncryptionPublicKey":null,
    "recordingEncryptionPublicKeyId":0,
    "secureCookiesEnabled":0,
    "triggerSessionReplayEnabled":0,
    "triggerSessionReplayRegex":null,
    "dynamicIdRegex":null,
    "whitelistedAttributes":["data-step"],
    "replayRecordingUnmaskedUrlRegex":null,
    "replayRecordingMaskedUrlRegex":null,
    "tagDeploymentMode":"CONTENTSQUARE",
    "experimental":null,
    "iframesTracking":0,
    "textVisibilityEnabled":0,
    // iOS WKWebView has some cookie issues and its already handled in the SDK
    "cookielessTrackingEnabled":1,
    "malkaUrlEnabled":0,
    "malkaEtrEnabled":0,
    "pathComputationRules":{"reliableSelectors":[],
    "uniqueAttributes":[],
    "uniqueCssSelectors":[]},
    "asyncSerializerEnabled":1,
    "pendingInactivityTimeout":5000,
    "accessibilityEnabled":0,
    "apiErrors":{
        "validCustomHeaders":[],
        "validUrls":[],
        "collectStandardHeaders":1,
        "collectQueryParam":1,
        "collectRequestBody":1,
        "collectResponseBody":1
    },
    "malkaQuotaServiceDomain":"q-aeu1.contentsquare.net",
    "malkaRecordingDomain":"k-aeu1.contentsquare.net"
    };

    // TODO: check if this config is needed
    var CS_INTEGRATIONS_CONF = {"mopinion":{"settings":["enableFeedbackDisplayed",
    "enableFeedbackSubmitted",
    "enableFeedbackTriggerMethod",
    "enableSurveyID",
    "enableCustomerID",
    "enableRegularRating",
    "enableNPSrating",
    "enableCES",
    "enableGCR",
    "enableFCP",
    "enableSelects",
    "enableInputs",
    "enableTextareas",
    "enableRadioButtons",
    "enableCheckboxes",
    "enableLikerts",
    "enableMatrixes",
    "enableCategory"]}};
