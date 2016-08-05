/**
 * HABmin - the openHAB admin interface
 *
 * openHAB, the open Home Automation Bus.
 * Copyright (C) 2010-2013, openHAB.org <admin@openhab.org>
 *
 * See the contributors.txt file in the distribution for a
 * full listing of individual contributors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses>.
 *
 * Additional permission under GNU GPL version 3 section 7
 *
 * If you modify this Program, or any covered work, by linking or
 * combining it with Eclipse (or a modified version of that library),
 * containing parts covered by the terms of the Eclipse Public License
 * (EPL), the licensors of this Program grant you additional permission
 * to convey the resulting work.
 */

/**
 * OpenHAB Admin Console HABmin
 *
 * @author Chris Jackson
 */

Ext.define('openHAB.config.sitemapProperties', {
    extend: 'Ext.panel.Panel',
    layout: 'fit',
    header: false,

    initComponent: function () {
        this.tabTip = language.config_SitemapPropertiesTip;

        var me = this;

        // Note that "itemicon" is used for the model to avoid upsetting the icon in the treeview
        // ExtJS uses the keyword "icon" to allow the user to set the icon in the tree!
        var widgetConfig = {
            Sitemap: ["label", "itemicon"],
            Chart: ["item", "label", "format", "units", "itemicon", "service", "period", "refresh", "labelcolor", "valuecolor", "visibility"],
            Colorpicker: ["item", "label", "format", "units", "itemicon", "sendFrequency", "labelcolor", "valuecolor", "visibility"],
            Frame: ["item", "label", "format", "units", "translateService", "translateRule", "itemicon", "labelcolor", "valuecolor", "visibility"],
            Group: ["item", "label", "format", "units", "translateService", "translateRule", "itemicon", "labelcolor", "valuecolor", "visibility"],
            Image: ["label", "itemicon", "format", "units", "url", "refresh", "labelcolor", "valuecolor", "visibility"],
            List: ["item", "label", "format", "units", "translateService", "translateRule", "itemicon", "separator", "labelcolor", "valuecolor", "visibility"],
            Switch: ["item", "label", "format", "units", "translateService", "translateRule", "itemicon", "command", "mapping", "labelcolor", "valuecolor", "visibility"],
            Selection: ["item", "label", "format", "units", "translateService", "translateRule", "itemicon", "mapping", "labelcolor", "valuecolor", "visibility"],
            Setpoint: ["item", "label", "format", "units", "translateService", "translateRule", "itemicon", "minValue", "maxValue", "step", "labelcolor", "valuecolor", "visibility"],
            Slider: ["item", "label", "format", "units", "translateService", "translateRule", "itemicon", "sendFrequency", "switchSupport", "labelcolor", "valuecolor", "visibility"],
            Text: ["item", "label", "format", "units", "translateService", "translateRule", "itemicon", "labelcolor", "valuecolor", "visibility"],
            Video: ["label", "format", "units", "url", "itemicon", "labelcolor", "valuecolor", "encoding", "visibility"],
            Webview: ["label", "format", "units", "url", "height", "itemicon", "labelcolor", "valuecolor", "visibility"]
        };

        var widgetItemTypes = {
            Sitemap: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Chart: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Colorpicker: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Frame: ["GroupItem", "StringItem"],
            Group: ["GroupItem", "StringItem"],
            Image: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            List: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Switch: ["DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Selection: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Setpoint: ["NumberItem"],
            Slider: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Text: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Video: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"],
            Webview: ["ColorItem", "ContactItem", "DateTimeItem", "DimmerItem", "GroupItem", "NumberItem", "RollershutterItem", "StringItem", "SwitchItem"]
        };

        // Array of widget types that are allowed to have children
        var linkableWidgets = ["sitemap", "Group", "Text", "Image", "Frame"];

        var widgetHelp = {
            command: "?",
            height: language.config_SitemapHelpHeight,
            item: language.config_SitemapHelpItem,
            itemicon: language.config_SitemapHelpIcon,
            label: language.config_SitemapHelpLabel,
            format: language.config_SitemapHelpFormat,
            encoding: language.config_SitemapHelpEncoding,
            units: language.config_SitemapHelpUnits,
            translateService: language.config_SitemapHelpTranslateSvc,
            translateRule: language.config_SitemapHelpTranslateRule,
            mapping: language.config_SitemapHelpMapping,
            maxValue: language.config_SitemapHelpMax,
            minValue: language.config_SitemapHelpMin,
            period: language.config_SitemapHelpPeriod,
            refresh: language.config_SitemapHelpRefresh,
            sendFrequency: language.config_SitemapHelpFrequency,
            separator: language.config_SitemapHelpSeparator,
            service: language.config_SitemapHelpService,
            step: language.config_SitemapHelpStep,
            switchSupport: language.config_SitemapHelpSwitchSupport,
            url: language.config_SitemapHelpURL,
            visibility: language.config_SitemapHelpVisibility,
            labelcolor: language.config_SitemapHelpLabelColor,
            valuecolor: language.config_SitemapHelpValueColor
        };

        var configTranslate = {
            itemicon: 'icon',
            icon: 'iconitem'
        };

        var sitemapName;

        var itemComboStore = Ext.create('Ext.data.ArrayStore', {
            model: 'ItemConfigModel',
            proxy: {
                type: 'rest',
                url: HABminBaseURL + '/config/items',
                reader: {
                    type: 'json',
                    root: 'item'
                },
                headers: {'Accept': 'application/json'},
                pageParam: undefined,
                startParam: undefined,
                sortParam: undefined,
                limitParam: undefined
            },
            autoLoad: true
        });

        var configTree = [];
        var sourceConfig = {
            item: {
                displayName: language.config_SitemapPropertiesItem,
                renderer: function (v) {
                    if (v == null)
                        return;
                    var icon = "";
                    var id = itemComboStore.findExact("name", v);
                    if (id != -1) {
                        var type = itemComboStore.getAt(id).get('type');
                        if (type != "") {
                            id = itemTypeStore.findExact("name", type);
                            if (id != -1)
                                icon = '<img src="' + itemTypeStore.getAt(id).get('icon') + '" align="left" height="16">';
                        }
                    }

                    return '<div>' + icon + '</div><div style="margin-left:20px">' + v + '</div>';
                },
                editor: Ext.create('Ext.form.ComboBox', {
                    store: itemComboStore,
                    queryMode: 'local',
                    typeAhead: true,
                    editable: true,
                    displayField: 'name',
                    valueField: 'name',
                    emptyText: '',
                    forceSelection: true,
                    allowBlank: true,
                    listConfig: {
                        getInnerTpl: function () {
                            return '<div><tpl if="icon.length"><img height="16px" src="../images/{icon}.png"></tpl>' +
                                '{name}</div>';
                        }
                    },
                    listeners: {
                        beforequery: function (record) {
                            record.query = new RegExp(record.query, 'i');
                            record.forceAll = true;
                        }
                    }
                })
            },
            itemicon: {
                displayName: language.config_SitemapPropertiesIcon,
                renderer: function (v) {
                    if (v == "" || v == null)
                        return "";
                    var icon = "";
                    var label = "";
                    var resp = '<div width="30">';
                    var ref = itemIconStore.findExact("name", v);
                    if (ref != -1) {
                        if (itemIconStore.getAt(ref).get('menuicon') != "")
                            icon = '<img src="../images/' + itemIconStore.getAt(ref).get('menuicon') + '" align="left" height="16">';
                        if (itemIconStore.getAt(ref).get('label') != "")
                            label = itemIconStore.getAt(ref).get('label');
                    }
                    else {
                        // If we get here, we're using an icon that isn't known to the REST service
                        icon = '<img src="../images/' + v + '.png" align="left" height="16">';
                        label = v + " (manually set)";
                    }

                    resp += '</div>' + v;
                    return '<div>' + icon + '</div><div style="margin-left:20px">' + label + '</div>';
                },
                editor: Ext.create('Ext.form.ComboBox', {
                    store: itemIconStore,
                    queryMode: 'local',
                    typeAhead: true,
                    editable: true,
                    displayField: 'label',
                    valueField: 'name',
                    forceSelection: true,
                    allowBlank: true,
                    listConfig: {
                        getInnerTpl: function () {
                            var tpl = '<div>' +
                                '<img src="../images/{menuicon}" align="left" height="16">&nbsp;&nbsp;' +
                                '{label}</div>';
                            return tpl;
                        }
                    },
                    listeners: {
                        change: function (field, newValue, oldValue, eOpts) {
                            if (newValue === null) {
                                this.reset();
                            }
                        }
                    }
                })
            },
            format: {
                displayName: language.config_SitemapPropertiesFormat,
                renderer: function (v) {
                    var label = "";
                    var ref = itemFormatStore.findExact("format", v);
                    if (ref != -1) {
                        if (itemFormatStore.getAt(ref).get('label') != "")
                            label = itemFormatStore.getAt(ref).get('label');
                    }
                    else {
                        // If we get here, we're using a format that isn't defined
                        label = v;
                    }

                    return label;
                },
                editor: Ext.create('Ext.form.ComboBox', {
                    store: itemFormatStore,
                    queryMode: 'local',
                    typeAhead: true,
                    displayField: 'label',
                    valueField: 'format',
                    forceSelection: false,
                    editable: true,
                    allowBlank: true
                })
            },
            period: {displayName: language.config_SitemapPropertiesPeriod},
            units: {displayName: language.config_SitemapPropertiesUnits},
            label: {displayName: language.config_SitemapPropertiesLabel},
            encoding: {displayName: language.config_SitemapPropertiesEncoding},
            translateService: {
                displayName: language.config_SitemapPropertiesTranslationService,
                renderer: function (v) {
                    var ref = translationServiceStore.findExact("name", v);
                    if (ref == -1)
                        return "";
                    return translationServiceStore.getAt(ref).get("label");
                },
                editor: Ext.create('Ext.form.ComboBox', {
                    store: translationServiceStore,
                    queryMode: 'local',
                    displayField: 'label',
                    valueField: 'name',
                    typeAhead: false,
                    editable: false,
                    forceSelection: true,
                    allowBlank: true
                })
            },
            mapping: {
                displayName: language.config_SitemapPropertiesMapping
                /*,
                 renderer:function (v) {
                 var mapArray = [].concat[v];
                 var mapString = "";

                 for (var cnt = 0; cnt < mapArray.length; cnt++) {
                 mapString += mapArray.command + "=" + mapArray.label + " ";
                 }

                 return mapString;
                 }*/
            },
            translateRule: {displayName: language.config_SitemapPropertiesTranslationRule},
            maxValue: {displayName: language.config_SitemapPropertiesMaximum},
            minValue: {displayName: language.config_SitemapPropertiesMinimum},
            service: {displayName: language.config_SitemapPropertiesService},
            step: {displayName: language.config_SitemapPropertiesStep},
            command: {displayName: language.config_SitemapPropertiesCommand},
            sendFrequency: {displayName: language.config_SitemapPropertiesSendFrequency},
            switchSupport: {displayName: language.config_SitemapPropertiesSwitchSupport},
            url: {displayName: language.config_SitemapPropertiesURL},
            height: {displayName: language.config_SitemapPropertiesHeight},
            refresh: {displayName: language.config_SitemapPropertiesRefreshPeriod},
            visibility: {displayName: language.config_SitemapPropertiesVisibility},
            labelcolor: {displayName: language.config_SitemapPropertiesLabelColor},
            valuecolor: {displayName: language.config_SitemapPropertiesValueColor}
        };


        // Sitemap model
        Ext.define('SitemapTree', {
            extend: 'Ext.data.Model',
            fields: [
                {name: 'id'},
                {name: 'item'},
                {name: 'label'},
                {name: 'format'},
                {name: 'units'},
                {name: 'translateService'},
                {name: 'translateRule'},
                {name: 'type'},
                {name: 'itemicon'},
                {name: 'maxValue'},
                {name: 'minValue'},
                {name: 'step'},
                {name: 'mapping'},
                {name: 'leaf'},
                {name: 'sendFrequency'},
                {name: 'switchSupport'},
                {name: 'height'},
                {name: 'refresh'},
                {name: 'service'},
                {name: 'period'},
                {name: 'url'},
                {name: 'labelcolor'},
                {name: 'valuecolor'},
                {name: 'command'},
                {name: 'visibility'}
            ]
        });

        var sitemapItemStore = Ext.create('Ext.data.TreeStore', {
            model: 'SitemapTree',
            proxy: {
                type: 'memory'
            },
            folderSort: true
        });

        var toolbar = Ext.create('Ext.toolbar.Toolbar', {
            itemId: "toolbar",
            items: [
                {
                    icon: 'images/cross.png',
                    itemId: 'cancel',
                    text: language.cancel,
                    cls: 'x-btn-icon',
                    disabled: true,
                    tooltip: language.config_ItemPropertiesCancelChangeTip,
                    handler: function () {
                        // Reset to the current data
                        me.revertSitemap();
                    }
                },
                {
                    icon: 'images/disk.png',
                    itemId: 'save',
                    text: language.save,
                    cls: 'x-btn-icon',
                    disabled: true,
                    tooltip: language.config_SitemapPropertiesSave,
                    handler: function () {
                        me.saveSitemap();
                    }
                }
            ]
        });


        var propertySheet = Ext.create('Ext.grid.property.Grid', {
            title: language.properties,
            icon: 'images/gear.png',
            region: 'east',
            flex: 3,
            hideHeaders: true,
            sortableColumns: false,
            split: true,
            tools: [
                {
                    type: 'tick',
                    disabled: true,
                    tooltip: language.config_SitemapPropertiesUpdate,
                    handler: function (event, toolEl, panel) {
                        // Save button pressed - update the sitemap tree with the updated properties
                        var node = sitemapTree.getSelectionModel().getSelection()[0];
                        if (node == null)
                            return;

                        var prop = propertySheet.getStore();
                        var properties = widgetConfig[node.get("type")];
                        if (properties != null) {
                            for (var pcnt = 0; pcnt < properties.length; pcnt++) {
                                var val = getPropertyValue(prop, properties[pcnt]);
                                if (val == null)
                                    val = "";
                                else if (properties[pcnt] == 'mapping') {
                                    // Special attention for 'mapping'
                                    var map = val.split(",");
                                    var ocnt = 0;

                                    val = [];
                                    if (map != null) {
                                        for (var mcnt = 0; mcnt < map.length; mcnt++) {
                                            var segment = map[mcnt].split("=");
                                            if (segment == null || segment.length != 2)
                                                continue;
                                            val[ocnt] = {};
                                            val[ocnt].command = segment[0].trim();
                                            val[ocnt].label = segment[1].trim();
                                            ocnt++;
                                        }
                                    }
                                }

                                node.set(properties[pcnt], val);
                            }
                        }

                        // Disable the save button
                        propertySheet.getHeader().getTools()[0].disable();
                        
                        toolbar.getComponent('cancel').enable();
                        toolbar.getComponent('save').enable();

                        // Function to get a property value given the name
                        // Returns null if property not found
                        function getPropertyValue(prop, name) {
                            var index = prop.find('name', name);
                            if (index != -1)
                                return prop.getAt(index).get('value');
                            else
                                return null;
                        }
                    }
                },
                {
                    type: 'cross',
                    disabled: true,
                    tooltip: language.config_SitemapPropertiesDeleteWidget,
                    handler: function (event, toolEl, panel) {
                        Ext.Msg.show({
                            title: language.config_SitemapPropertiesDeleteWidgetConfirm,
                            msg: language.config_SitemapPropertiesDeleteWidgetMsg,
                            buttons: Ext.Msg.YESNO,
                            config: {
                                obj: this,
                                name: sitemapName
                            },
                            fn: deleteWidget,
                            icon: Ext.MessageBox.QUESTION
                        });
                    }
                }
            ],
            viewConfig: {
                markDirty: true
            },
            listeners: {
                propertychange: function (source, recordId, value, oldValue, eOpts) {
                    propertySheet.getHeader().getTools()[0].enable();
                }/*,
                 itemmouseenter:function (grid, record, item, index, e, eOpts) {
                 var name = record.get("name");
                 helpStatusText.setText(widgetHelp[name]);
                 },
                 itemmouseleave:function (grid, record, item, index, e, eOpts) {
                 helpStatusText.setStatus({text: ""});
                 }*/
            }
        });

        var widgetsGrid = Ext.create('Ext.grid.Panel', {
            // TODO: Does this need to be 'id'?
            id: 'sitemapWidgetGrid',
            store: widgetStore,
            icon: 'images/document-node.png',
            header: true,
            hideHeaders: true,
            title: language.config_SitemapPropertiesWidgets,
            region: 'center',
            flex: 1,
            collapsible: false,
            useArrows: false,
            lines: true,
            rootVisible: false,
            multiSelect: false,
            viewConfig: {
                allowCopy: true,
                copy: true,
                plugins: {
                    ptype: 'gridviewdragdrop',
                    dragGroup: 'sitemapSitemapTree',
                    dropGroup: 'sitemapSitemapTree',
                    enableDrag: true,
                    enableDrop: false
                }
            },
            columns: [
                {
                    flex: 1,
                    dataIndex: 'type',
                    renderer: function (v) {
                        var icon = "";
                        var ref = widgetStore.findExact("type", v);
                        if (ref != -1) {
                            if (widgetStore.getAt(ref).get('icon') != "")
                                icon = '<img src="' + widgetStore.getAt(ref).get('icon') + '" align="left" height="16">';
                        }

                        return '<div>' + icon + '</div><div style="margin-left:20px">' + v + '</div>';
                    }
                }
            ]
        });

        var sitemapTree = Ext.create('Ext.tree.Panel', {
            // TODO: Does this need to be 'id'
            id: 'sitemapSitemapTree',
            store: sitemapItemStore,
            header: true,
            title: language.config_SitemapPropertiesConfiguration,
            region: 'south',
            icon: 'images/maps-stack.png',
            flex: 2,
            collapsible: false,
            useArrows: false,
            lines: true,
            tools: [
                {
                    type: 'expand',
                    tooltip: language.config_SitemapPropertiesExpand,
                    handler: function (event, toolEl, panel) {
                        sitemapTree.expandAll();
                    }
                }
            ],
            rootVisible: true,
            multiSelect: false,
            viewConfig: {
                stripeRows: true,
                plugins: {
                    ptype: 'treeviewdragdrop',
                    dropGroup: 'sitemapSitemapTree',
                    dragGroup: 'sitemapSitemapTree',
                    enableDrag: true,
                    enableDrop: true
                },
                listeners: {
                    beforedrop: function (node, data, overModel, dropPosition, dropFunction, eOpts) {
                    },
                    drop: function (node, data, dropRec, dropPosition) {
                        // Set default data
                        // Most of this is done automatically based on store names
                        var record = data.records[0];
                        record.set('icon', '');

                        toolbar.getComponent('cancel').enable();
                        toolbar.getComponent('save').enable();

                        showWidgetProperties(record);
                    },
                    nodedragover: function (targetNode, position, dragData, e, eOpts) {
                        // Make sure we can only append to groups and frames
                        if (position == "append") {
                            if (linkableWidgets.indexOf(targetNode.get('type')))
                                return true;
                            return false
                        }
                    },
                    itemadd: function( records, index, node, eOpts ) {
                        sitemapTree.getSelectionModel().deselectAll(true);
                        sitemapTree.getSelectionModel().select(node, true);
                    }
                }
            },
            columns: [
                {
                    // The tree column
                    xtype: 'treecolumn',
                    text: language.config_SitemapPropertiesLabelWidget,
                    flex: 2,
                    dataIndex: 'type',
                    renderer: function (value, meta, record) {
                        // We want to add an indicator if this is has conditional visibility
                        var img = '';
                        if (record.get("visibility") != "") {
                            img = '<img src="images/control-power-small.png">';
                        }

                        return '<span>' + value + '</span><span style="float:right">' + img + '</span>';
                    }
                },
                {
                    text: language.config_SitemapPropertiesLabelItem,
                    flex: 2,
                    dataIndex: 'item'
                },
                {
                    text: language.config_SitemapPropertiesLabelLabel,
                    flex: 3,
                    dataIndex: 'label',
                    renderer: function (value, meta, record) {
                        // Rendering of the item
                        // This will use the values specified in the sitemap if set
                        // Otherwise it will default to showing the default item configuration
                        var label = value;
                        var icon = record.get("itemicon");
                        var item = record.get("item");
                        var ref = itemConfigStore.findExact("name", item);
                        var labelClass = "sitemap-label-set";

                        if (ref != -1) {
                            if (label == "") {
                                label = itemConfigStore.getAt(ref).get('label');
                                labelClass = "sitemap-label-default";
                            }

                            if (icon == "") {
                                icon = itemConfigStore.getAt(ref).get('icon');
//                                labelClass = "sitemap-label-default";
                            }
                        }
                        if (icon != "")
                            icon = '<img src="../images/' + icon + '.png" align="left" height="16">';

                        return '<div>' + icon + '</div><div class="' + labelClass + '">' + label + '</div>';
                    }
                }
            ],
            listeners: {
                itemclick: function (grid, record, item, index, element, eOpts) {
                    showWidgetProperties(record);
                },
                itemappend: function(panel, node, index, eOpts) {
                    sitemapTree.getSelectionModel().select(node, true);
                }
            }
        });

        var helpStatusText = Ext.create('Ext.toolbar.TextItem', {text: ''});
        var statusBar = Ext.create('Ext.ux.StatusBar', {text: 'Sitemap:', items: [helpStatusText]});

        var sitemapDesign = Ext.create('Ext.panel.Panel', {
            itemId: 'sitemapPanel',
            title: language.properties,
            tbar: toolbar,
            icon: 'images/maps-stack.png',
            defaults: {
                split: true
            },
            border: false,
            layout: 'border',
            items: [widgetsGrid, sitemapTree, propertySheet]
        });

        var sitemapThemes = Ext.create('openHAB.config.sitemapTheme');

        var tabs = Ext.create('Ext.tab.Panel', {
            layout: 'fit',
            border: false,
            bbar: statusBar,
            items: [sitemapDesign, sitemapThemes]
        });

        this.items = tabs;

        this.callParent();

        // Set the item properties. This is called just after the properties window is created.
        this.setItem = function (newSitemap) {
            Ext.Ajax.request({
                url: HABminBaseURL + "/config/sitemap/" + newSitemap,
                headers: {'Accept': 'application/json'},
                method: 'GET',
                success: function (response, opts) {
                    var json = Ext.decode(response.responseText);
                    // If there's no config for this sitemap, records will be null
                    if (json == null)
                        return;

                    sitemapName = newSitemap;
                    statusBar.setStatus({text: "Sitemap: " + newSitemap});

                    // Create the root item
                    var sitemapRoot = [];
                    sitemapRoot.label = json.label;
                    sitemapRoot.iconCls = "sitemap-sitemap";
                    sitemapRoot.type = "Sitemap";
                    sitemapRoot.leaf = false;
                    sitemapRoot.expanded = true;
                    sitemapRoot.children = [];

                    iterateTree(sitemapRoot.children, json.widget, 0);

                    // Load the tree and expand all parent node
                    sitemapItemStore.setRootNode(sitemapRoot);

                    function iterateTree(parent, tree, iterationCnt) {
                        if (tree == null)
                            return;

                        // Keep track of the number of iterations
                        iterationCnt++;
                        if (iterationCnt == 8)
                            return;

                        // Ensure tree is an array!
                        tree = [].concat(tree);

                        // Loop through the configuration
                        var numWidgets = tree.length;
                        for (var iItem = 0; iItem < numWidgets; ++iItem) {
                            var newItem = [];

                            // Create the new item
                            // Allows translation of local and remote naming
                            var properties = widgetConfig[tree[iItem].type];
                            if (properties != null) {
                                newItem.type = tree[iItem].type;
                                for (var pcnt = 0; pcnt < properties.length; pcnt++) {
                                    var property = properties[pcnt];
                                    if (configTranslate[properties[pcnt]] != null)
                                        property = configTranslate[properties[pcnt]];
                                    newItem[properties[pcnt]] = tree[iItem][property];
                                }
                            }

                            var widget = widgetStore.findExact('type', newItem.type);
                            if (widget != -1)
                                newItem.iconCls = widgetStore.getAt(widget).get("iconCls");

                            // Check if this has children
                            if (linkableWidgets.indexOf(tree[iItem].type)) {
                                newItem.children = [];
                                if (tree[iItem].widget != null)
                                    iterateTree(newItem.children, tree[iItem].widget, iterationCnt);
                            }

                            if (newItem.children == null)
                                newItem.leaf = true;
                            else
                                newItem.leaf = false;
                            parent.push(newItem);
                        }
                    }
                }
            });
        }

        // Delete the currently selected widget
        function deleteWidget(button, text, options) {
            if (button !== 'yes')
                return;

            // Delete button pressed - update the sitemap tree
            var node = sitemapTree.getSelectionModel().getSelection()[0];
            if (node == null)
                return;

            node.parentNode.removeChild(node);

            // Disable the buttons
            propertySheet.getHeader().getTools()[0].disable();
            propertySheet.getHeader().getTools()[1].disable();

            toolbar.getComponent('cancel').enable();
            toolbar.getComponent('save').enable();
        }

        // Show the selected widgets properties in the property grid
        function showWidgetProperties(widget) {
            // ToDo: We really should check if the properties are dirty and warn the user before setting the new values

            var source = [];
            var properties = widgetConfig[widget.get("type")];
            // Valid widget?
            if (properties == null)
                return;

            // Create the properties grid
            for (var cnt = 0; cnt < properties.length; cnt++) {
                if (widget.get(properties[cnt])) {
                    // Special attention for 'mapping'
                    if (properties[cnt] == 'mapping') {
                        var mapArray = widget.get(properties[cnt]);
                        var mapString = "";

                        var first = true;
                        for (var mcnt = 0; mcnt < mapArray.length; mcnt++) {
                            if (first == false)
                                mapString += ", ";
                            mapString += mapArray[mcnt].command + "=" + mapArray[mcnt].label;
                            first = false;
                        }
                        source[properties[cnt]] = mapString;
                    }
                    else
                        source[properties[cnt]] = widget.get(properties[cnt]);
                }
                else
                    source[properties[cnt]] = "";
            }

            propertySheet.setSource(source, sourceConfig);
            propertySheet.getHeader().getTools()[0].disable();

            itemComboStore.filterBy(function myfilter(record) {
                if (widgetItemTypes[widget.get("type")].indexOf(record.get("type")) == -1)
                    return false;
                return true;
            });

            // Enable delete button
            propertySheet.getHeader().getTools()[1].enable();
        }

        this.saveSitemap = function () {
            // Make sure we're loaded!
            if (sitemapName == null)
                return;

            var root = sitemapTree.getRootNode();
            var jsonArray = {};

            jsonArray.name = sitemapName;
            // Iterate through the store to generate the sitemap
            var errors = [];
            jsonArray.widget = iterateStore(root, 0);

            // Check if errors were detected in the sitemap definition
            // If so, notify and wait for them to be fixed!
            if (errors.length != 0) {
                var message = 'Errors exist in the sitemap definition -:';
                for (var cnt = 0; cnt < errors.length; cnt++)
                    message += "<br>" + errors[cnt];

                handleStatusNotification(NOTIFICATION_ERROR, message);
                return;
            }

            // Send the sitemap to openHAB
            Ext.Ajax.request({
                url: HABminBaseURL + "/config/sitemap/" + sitemapName,
                headers: {'Accept': 'application/json'},
                method: 'PUT',
                jsonData: jsonArray,
                success: function (response, opts) {
                    handleStatusNotification(NOTIFICATION_OK, language.config_SitemapPropertiesSaveOk);
                    sitemapItemStore.sync();
                    toolbar.getComponent('cancel').disable();
                    toolbar.getComponent('save').disable();
                },
                failure: function (result, request) {
                    handleStatusNotification(NOTIFICATION_ERROR, language.config_SitemapPropertiesSaveErr);
                }
            });

            function iterateStore(node, iterateCnt) {
                iterateCnt++;
                if (iterateCnt >= 9)
                    return;

                // Valid widget?
                var properties = widgetConfig[node.get("type")];
                if (properties == null)
                    return;

                // Get the widget properties
                var newNode = {};
                newNode.type = node.get('type');
                for (var pcnt = 0; pcnt < properties.length; pcnt++) {
                    var property = properties[pcnt];
                    if (configTranslate[properties[pcnt]] != null)
                        property = configTranslate[properties[pcnt]];
                    newNode[property] = node.get(properties[pcnt]);
                }

                // Check for children
                if (node.hasChildNodes()) {
                    newNode.widget = [];
                    for (var cnt = 0; cnt < 1000; cnt++) {
                        var child = node.getChildAt(cnt);
                        if (child == null)
                            break;

                        newNode.widget.push(iterateStore(child, iterateCnt));
                    }
                }
                else {
                    if (newNode.type == "Frame") {
                        var label = "No Label";
                        if (newNode.label && newNode.label.length)
                            label = newNode.label;
                        addError(sprintf(language.config_SitemapPropertiesFrameErr, label));
                    }
                }
                return newNode;
            }

            function addError(error) {
                errors.push(error);
            }
        }

        this.revertSitemap = function () {

        }
    }
})
;
