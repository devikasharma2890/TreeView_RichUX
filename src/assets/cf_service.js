
function CRMService() {
    var serviceObj = {
        getTabs: getTabs,
        getTabData: getTabData,
        getTreeView: getTreeView,
        tabInfoClick: tabInfoClick
    }
    
    return serviceObj;

    function getTabs(successHandler,errorHandler) {
        //Ajax should be called from CRM team
        if(JsonTab)
        {  
            console.log('This code with callbacks continuation will generate Callback Hell. Promises to be done');
            //return 
            AnotherMethod1(successHandler,errorHandler); 
        }
        else
        {
           serviceErrors(errorHandler,'getTabs');
            //return Promise.reject("Error Handler from getTabs");
        }
    }
    
    function AnotherMethod1(successHandler,errorHandler)
    {
        console.log('Imitating CRM service with another Method 1');
        AnotherMethod2(successHandler,errorHandler);
    }
     function AnotherMethod2(successHandler,errorHandler)
    {
        console.log('Imitating CRM service with another Method 2');
         successHandler(JsonTab);
         //return Promise.resolve(JsonTab);
    }
    
    function getTabData(tabName,successHandler, errorHandler) {
       //Ajax should be called from CRM team
        if(JsonTabInfo[0][tabName])
        {
            if(typeof successHandler === "function") {   
                 successHandler(JsonTabInfo[0][tabName]); 
            }
        }
        else
            serviceErrors(errorHandler,'getTabData');
       
    }

    function tabInfoClick(tabName,iconType, guid) {
        alert(tabName + ' : ' + iconType + "," + guid);// do something here
    }


    function getTreeView() {
        return tree;
    }

    function serviceErrors(err, methodName)
    {
        console.log('Error in Service.js > ' + methodName + ' and Error details : ' + err);
    }
}


// for tab information
var JsonTab = [
    { tabName: 'PORTFOLIO', tabcount: 0, type: "tile", class: 'active' },
    { tabName: 'PORTFOLIO2', tabcount: 0, type: "tile", class: '' },
    { tabName: 'OPPORTUNITY', tabcount: 2, type: "process", class: '' },
     { tabName: 'OPPORTUNITY2', tabcount: 2, type: "process", class: '' }
];

var JsonTabInfo =
    [{
        PORTFOLIO:
        [
            { group: "Active", tooltip: 'PORTFOLIO', guid: 'pass guid here', fromDate: "10/10/2017", toDate: "10/10/2017", itemContent: "CRM Online: Professional", amount: "$45,000.00", subitem: 'New field added here', users: "21 users", imageUrl: "./assets/images/sailboat.png", backColor: "orange", link: [{ linkUrl: './assets/images/arrow.png', linkId: 'imgArrow' }, { linkUrl: './assets/images/setting.png', linkId: 'imgSetting' }, { linkUrl: './assets/images/search.png', linkId: 'imgSearch' }, { linkUrl: './assets/images/location.png', linkId: 'imglocation' }, { linkUrl: './assets/images/lock.png', linkId: 'imglock' }] },
            { group: "Active", tooltip: 'PORTFOLIO', guid: 'pass guid here', fromDate: "10/10/2016", toDate: "10/10/2017", itemContent: "CRM Online: Professional", amount: "$45,000.00", subitem: 'New field added here', users: "20 users", imageUrl: "./assets/images/sailboat.png", backColor: "mediumpurple", link: [{ linkUrl: './assets/images/arrow.png', linkId: 'imgArrow' }, { linkUrl: './assets/images/setting.png', linkId: 'imgSetting' }, { linkUrl: './assets/images/search.png', linkId: 'imgSearch' }, { linkUrl: './assets/images/location.png', linkId: 'imglocation' }, { linkUrl: './assets/images/lock.png', linkId: 'imglock' }] },
            { group: "Active", tooltip: 'PORTFOLIO', guid: 'pass guid here', fromDate: "10/10/2015", toDate: "10/10/2017", itemContent: "Bharat_Mittal_0025", amount: "$45,000.00", subitem: 'New field added heresdfsdfsdfsdfsdfsdfsdfsdfsdfsfsdfsdfsdfsdfsdfsdevikasharma', users: "30 users", imageUrl: "./assets/images/sailboat.png", backColor: "yellow", link: [{ linkUrl: './assets/images/arrow.png', linkId: 'imgArrow' }, { linkUrl: './assets/images/setting.png', linkId: 'imgSetting' }, { linkUrl: './assets/images/search.png', linkId: 'imgSearch' }, { linkUrl: './assets/images/location.png', linkId: 'imglocation' }] },
            { group: "Active", tooltip: 'PORTFOLIO', guid: 'pass guid here', fromDate: "10/10/2015", toDate: "10/10/2017", itemContent: "CRM Online: Professionalfgdfgdfgd sdfsdfsdf sdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsfsf", amount: "$45,000.00", subitem: 'Custom styles', users: "30 users", imageUrl: "./assets/images/sailboat.png", backColor: "cyan", cssClass:"'color':'blue'", link: [{ linkUrl: './assets/images/arrow.png', linkId: 'imgArrow' }, { linkUrl: './assets/images/setting.png', linkId: 'imgSetting' }]},

        ],
        PORTFOLIO2:
        [
            { group: "Active", tooltip: 'PORTFOLIO', guid: 'pass guid here', fromDate: "10/10/2017", toDate: "10/10/2017", itemContent: "P2 : CRM Online: Professional", amount: "$45,000.00", subitem: '900,000.00', users: "21 users", imageUrl: "./assets/images/sailboat.png", backColor: "orange", link: [{ linkUrl: './assets/images/arrow.png', linkId: 'imgArrow' }, { linkUrl: './assets/images/setting.png', linkId: 'imgSetting' }, { linkUrl: './assets/images/search.png', linkId: 'imgSearch' }, { linkUrl: './assets/images/location.png', linkId: 'imglocation' }, { linkUrl: './assets/images/lock.png', linkId: 'imglock' }] },
            { group: "Active", tooltip: 'PORTFOLIO', guid: 'pass guid here', fromDate: "10/10/2016", toDate: "10/10/2017", itemContent: "P2 : CRM Online: Professional", amount: "$45,000.00", subitem: '', users: "20 users", imageUrl: "./assets/images/sailboat.png", backColor: "mediumpurple", link: [{ linkUrl: './assets/images/arrow.png', linkId: 'imgArrow' }, { linkUrl: './assets/images/setting.png', linkId: 'imgSetting' }, { linkUrl: './assets/images/search.png', linkId: 'imgSearch' }, { linkUrl: './assets/images/location.png', linkId: 'imglocation' }, { linkUrl: './assets/images/lock.png', linkId: 'imglock' }] },
            { group: "Active", tooltip: 'PORTFOLIO', guid: 'pass guid here', fromDate: "07/10/2016", toDate: "", itemContent: undefined, amount: undefined, subitem: undefined, users: "", imageUrl: "./assets/images/sailboat.png", backColor: "sandybrown", link: [{ linkUrl: './assets/images/arrow.png', linkId: 'imgArrow' }, { linkUrl: './assets/images/setting.png', linkId: 'imgSetting' }, { linkUrl: './assets/images/search.png', linkId: 'imgSearch' }, { linkUrl: './assets/images/location.png', linkId: 'imglocation' }] },
            { group: "Active", tooltip: 'PORTFOLIO', guid: 'pass guid here', fromDate: "10/10/2015", toDate: "10/10/2017", itemContent: "P2 : CRM Online: Professionalfgdfgdfgd sdfsdfsdf sdfsdfsdfssdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsfsfsf", amount: "$45,000.00", subitem: 'New field added here', users: "30 users", imageUrl: "./assets/images/sailboat.png", backColor: "cyan", link: [{ linkUrl: './assets/images/arrow.png', linkId: 'imgArrow' }, { linkUrl: './assets/images/setting.png', linkId: 'imgSetting' }] },

        ],
        OPPORTUNITY:
        [{
            processes:
            [{
                name: "process",
                processId: "id1",
                processStages:[] // or undefined
                            // [
                            //     // { stageName: 'Quality', width: '25', stageId: 'id1' },
                            //     // { stageName: 'Develop', width: '25', stageId: 'id2' },
                            //     // { stageName: 'Propose', width: '25', stageId: 'id3' },
                            //     // { stageName: 'Close', width: '25', stageId: 'id4' }
                            // ]
            },
            {
                name: "process2",
                processId: "id",
                processStages:
                            [
                                { stageName: 'Quality2sdfsdfsdfsf', width: '25', stageId: "id" },
                                { stageName: 'Develop2', width: '25', stageId: "id5" },
                                { stageName: 'Propose2sdfsdf sdfsdf', width: '25', stageId: "id6" },
                                { stageName: 'Close2', width: '25', stageId: "id7" }
                            ]
            }
        ],
        processData:
        [
            { currentProcessId: "id", currentStageId: 'id6', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Open", itemStatus: "In Progress", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "sandyBrown", itemContent: undefined, itemAmount: "", date: "12/26/2016" },
            { currentProcessId: "id1", currentStageId: 'id3', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Open", itemStatus: "In Progress", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "sandyBrown", itemContent: "Will be ordering about 110 items of all types (sample)", itemAmount: "$5,000.00", date: "12/26/2016" },
            { currentProcessId: "id", currentStageId: 'id', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Open", itemStatus: "In Progress", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "yellow", itemContent: "", itemAmount: "$5,000.00", date: undefined },
            { currentProcessId: "id1", currentStageId: 'id4', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Lost", itemStatus: "Cancelled", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "red", itemContent: "Some interest in our JJ line of products (sample)", itemAmount: "$5,000.00", date: "12/26/2016" },
            { currentProcessId: "id", currentStageId: 'id6', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Lost", itemStatus: "Cancelled", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "red", itemContent: "Some interest in our JJ line of products (sample)", itemAmount: "$5,000.00", date: "12/26/2016" },

        ],
    }],
    OPPORTUNITY2:
        [{
            processes: undefined,
        //     processes:
        //     [{
        //         name: "process of Opportunity 2",
        //         processId: "id1",
        //         processStages:
        //                     [
        //                         { stageName: 'Quality4', width: '25', stageId: 'id1' },
        //                         { stageName: 'Develop4', width: '25', stageId: 'id2' },
        //                         { stageName: 'Propose4', width: '25', stageId: 'id3' },
        //                         { stageName: 'Close4', width: '25', stageId: 'id4' }
        //                     ]
        //     },
        //     {
        //         name: "process2",
        //         processId: "id",
        //         processStages:
        //                     [
        //                         // When no stages are given
        //                         // { stageName: 'Quality3', width: '25', stageId: "id" },
        //                         // { stageName: 'Develop3', width: '25', stageId: "id5" },
        //                         // { stageName: 'Propose3', width: '25', stageId: "id6" },
        //                         // { stageName: 'Close3', width: '25', stageId: "id7" }
        //                     ]
        //     }
        // ],
        processData:
        [
            { currentProcessId: "id", currentStageId: 'id6', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Open", itemStatus: "In Progress", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "yellow", itemContent: "Will be ordering about 110 items of all types (sample)", itemAmount: "$5,000.00", date: "12/26/2016" },
            { currentProcessId: "id1", currentStageId: 'id3', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Open", itemStatus: "In Progress", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "yellow", itemContent: "Will be ordering about 110 items of all types (sample)", itemAmount: "$5,000.00", date: "12/26/2016" },
            { currentProcessId: "id", currentStageId: 'id', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Open", itemStatus: "In Progress", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "yellow", itemContent: "Will be ordering about 110 items of all types (sample)", itemAmount: "$5,000.00", date: "12/26/2016" },
            { currentProcessId: "id1", currentStageId: 'id4', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Lost", itemStatus: "Cancelled", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "red", itemContent: "Some interest in our JJ line of products (sample)", itemAmount: "$5,000.00", date: "12/26/2016" },
            { currentProcessId: "id", currentStageId: 'id6', tooltip: 'OPPORTUNITY', guid: 'pass guid here', group: "Lost", itemStatus: "Cancelled", itemImageUrl: "./assets/images/rd_icon_case.png", imageUrlBackColor: "red", itemContent: "Some interest in our JJ line of products (sample)", itemAmount: "$5,000.00", date: "12/26/2016" },

        ],
    }]
    
    }];




// for tree view
var tree = [
    {
        name: 'Microsoft',
        className: 'rootClass',
        children: [
            { name: 'Technologies', className: 'rootClass', hasChildren: true, children: [{ name: 'Asp.net', className: 'childClass' }, { name: 'VB.net', className: 'childClass' }, { name: 'C#', className: 'childClass' }, { name: 'MS-Sql', className: 'childClass' }] },
            { name: 'Tools', className: 'rootClass', hasChildren: true, children: [{ name: 'MS-Office', className: 'childClass' }, { name: 'IE', className: 'childClass' }, { name: 'Windows', className: 'childClass' }, { name: 'Server', className: 'childClass' }] }
        ]
    },
    {
        name: 'Google',
        className: 'rootClass',
        hasChildren: true,
        children: [
            { name: 'Technologies', className: 'rootClass', hasChildren: true, children: [{ name: 'C++', className: 'childClass' }, { name: 'Java', className: 'childClass' }, { name: 'Python', className: 'childClass' }] },
            { name: 'Tools', className: 'rootClass', hasChildren: true, children: [{ name: 'Gmail', className: 'childClass' }, { name: 'Chrome', className: 'childClass' }, { name: 'PlayStore', className: 'childClass' }] }
        ]
    }
];
// var tree= undefined // or [];
