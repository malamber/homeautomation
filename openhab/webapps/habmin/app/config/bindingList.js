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

Ext.define('openHAB.config.bindingList', {
    extend: 'Ext.panel.Panel',
    layout: 'fit',
    icon: 'images/chain.png',

    initComponent: function () {
        this.title = language.config_BindingListTitle;
        this.tabTip = language.config_BindingListTitleTip;

        var bindingList = Ext.create('Ext.grid.Panel', {
            store: bindingStore,
            header: false,
            columns: [
                {
                    text: language.config_BindingListBundle,
                    hideable: false,
                    flex: 3,
                    sortable: true,
                    dataIndex: 'bundle'
                },
                {
                    text: language.config_BindingListName,
                    hideable: false,
                    flex: 4,
                    sortable: true,
                    dataIndex: 'name'
                },
                {
                    text: language.config_BindingListVersion,
                    hideable: false,
                    flex: 3,
                    sortable: true,
                    dataIndex: 'osgiVersion'
                }
            ],
            layout: 'fit',
            viewConfig: {
                stripeRows: false,
                enableTextSelection: false,
                markDirty: false
            },
            listeners: {
                itemclick: function (grid, record) {
                    // Remove the current editor
                    Ext.getCmp('configPropertyContainer').removeProperty();

                    if (record == null)
                        return;

                    var pid = record.get('pid');
                    if (pid == "")
                        return;

                    // Create a new bindingProperties
                    var newProperties = Ext.create('openHAB.config.bindingProperties');

                    if (newProperties != null) {
                        newProperties.setBinding(pid);
                        Ext.getCmp('configPropertyContainer').setNewProperty(newProperties);
                    }
                }
            }
        });

        this.items = bindingList;

        this.callParent();
    }
})
;