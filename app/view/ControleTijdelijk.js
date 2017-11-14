/*
 * File: app/view/ControleTijdelijk.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeZC_StartAdministratie.view.ControleTijdelijk', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.controletijdelijk',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Column'
    ],

    title: 'Starts tijdelijke leden',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    id: 'StartlijstTijdelijkGrid',
                    title: '',
                    enableColumnHide: false,
                    enableColumnMove: false,
                    forceFit: false,
                    store: 'ControleStartlijstTijdelijk_Store',
                    viewConfig: {
                        id: 'StartlijstTijdelijkView',
                        minHeight: 20,
                        emptyText: '<div class="noData" ></div>'
                    },
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            height: 32,
                            id: 'StartlijstTijdelijk_Bladwijzer',
                            afterPageText: 'van {0}',
                            beforePageText: 'Pagina',
                            displayInfo: true,
                            displayMsg: 'Weergave {0} - {1} tot {2}',
                            emptyMsg: 'Geen data aanwezig',
                            firstText: 'Eerste pagina',
                            lastText: 'Laatste pagina',
                            nextText: 'Volgende pagina',
                            prevText: 'Vorige pagina',
                            refreshText: 'Verversen',
                            store: 'ControleStartlijstTijdelijk_Store'
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 90,
                            dataIndex: 'DATUM',
                            text: 'Datum'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 40,
                            dataIndex: 'DAGNUMMER',
                            text: '#'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 100,
                            dataIndex: 'REG_CALL',
                            text: 'Registratie'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (value === null)
                                {
                                    return;
                                }

                                metaData.tdAttr = 'data-qtip="Aanpassen vlieger voor deze vlucht"';

                                var retValue = null;

                                if (record.data.VLIEGER_LIDTYPE_ID == 609)
                                {
                                    retValue = "<a href=javascript:Ext.Controle.AanpassenTijdelijkLidWindow(" + record.data.ID + ");><b><font color='red'>" + value + "</font><b></a>";
                                }
                                else
                                {
                                    retValue = value;
                                }

                                return retValue;
                            },
                            width: 200,
                            dataIndex: 'VLIEGERNAAM',
                            text: 'Voorin'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (record.data.INZITTENDE_LIDTYPE_ID == 609)
                                return "<b><font color='red'>" + value + "</font><b>";

                                return value;
                            },
                            width: 200,
                            dataIndex: 'INZITTENDENAAM',
                            text: 'Achterin'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 50,
                            dataIndex: 'STARTTIJD',
                            text: 'Start'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 50,
                            dataIndex: 'LANDINGSTIJD',
                            text: 'Landing'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 50,
                            dataIndex: 'DUUR',
                            text: 'Duur'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 250,
                            dataIndex: 'OPMERKING',
                            text: 'Opmerking'
                        }
                    ],
                    listeners: {
                        itemdblclick: {
                            fn: me.onStartlijstTijdelijkGridItemDblClick,
                            scope: me
                        }
                    }
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onPanelAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onStartlijstTijdelijkGridItemDblClick: function(dataview, record, item, index, e, eOpts) {
        Ext.Hoofdscherm.StartlijstTijdelijk_GridviewItemDblClick(dataview, record, item, index, e, eOpts);
    },

    onPanelAfterRender: function(component, eOpts) {
        Ext.Hoofdscherm.ToonControleTijdelijkGrid();
    }

});