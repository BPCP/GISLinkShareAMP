/* global model, args, instance */

var linkForm = {
    name: "alfresco/forms/DynamicForm",
    id: "myDynamicForm",
    config: {
        name: "deleteForm",
        pubSubScope: "Gis_Link_edit",
        subscriptionTopic: "UPDATED_FORM_DETAILS",
        okButtonPublishTopic: "GIS_LINK_DELETE",
        widgets: [
            {name: "alfresco/forms/controls/TextBox",
                config: {
                    name: "pk",
                    id: "pk",
                    label: "Source GIS Link",
                    fieldId: "sourcelink"}
            }, {name: "alfresco/forms/controls/TextBox",
                config: {
                    name: "npk",
                    id: "npk",
                    label: "Target GIS Link",
                    fieldId: "targetlink"}
            }
        ]
    }
};

var dashletWrapper = {
    name: "alfresco/dashlets/Dashlet",
    id: "MY_DASHLET",
    config: {
        title: "GIS Link Management",
        additionalCssClasses: "largepad",
        bodyHeight: 300,
        widgetsForTitleBarActions: [
        ],
        widgetsForToolbar: [
        ],
        widgetsForToolbar2: [
        ],
        widgetsForBody: [linkForm,
            {
                name: "alfresco/buttons/DropDownButton",
                config: {
                    hideDropDownTopics: ["SAVE"],
                    label: "Show Form",
                    widgets: [
                        {
                            name: "alfresco/forms/Form",
                            config: {
                                okButtonPublishTopic: "SAVE",
                                okButtonPublishGlobal: true,
                                widgets: [
                                    {
                                        name: "alfresco/forms/controls/TextBox",
                                        config: {
                                            label: "Value",
                                            name: "value"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]

    }

};


model.jsonModel = {
    rootNodeId: args.htmlid,
    pubSubScope: instance.object.id,
    services: ["alfresco/services/CrudService"],
    widgets: [dashletWrapper]
};