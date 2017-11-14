/*
 * File: app/view/VliegtuigenTab.js
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

Ext.define('GeZC_StartAdministratie.view.VliegtuigenTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.vliegtuigentab',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Boolean',
        'Ext.toolbar.Paging',
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer',
        'Ext.form.field.Checkbox'
    ],

    collapsible: true,
    title: 'Vliegtuigen',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    id: 'VliegtuigenlijstGrid',
                    frameHeader: false,
                    title: '',
                    enableColumnHide: false,
                    enableColumnMove: false,
                    store: 'VliegtuigenLijst_GridStore',
                    viewConfig: {
                        id: 'refVliegtuigenView',
                        emptyText: '<div class="noData" ></div>',
                        listeners: {
                            itemdblclick: {
                                fn: me.Vliegtuigen_GridviewItemDblClick,
                                scope: me
                            }
                        }
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {

                                var verwijderMode = Ext.getCmp('ButtonVerwijderenVliegtuig').pressed;


                                if (verwijderMode === true)
                                {
                                    var ret= "<a href=javascript:VerwijderenVliegtuig(" + value + ");>";
                                    ret = ret + "<IMG SRC='images/delete.png' border=0></a>";
                                    metaData.tdAttr = 'data-qtip="' + record.data.REGISTRATIE + '(' + record.data.CALLSIGN + ')  verwijderen uit de start administratie."';
                                    return ret;
                                }
                                else
                                {
                                    if (appSettings.Aanwezigheid)
                                    {
                                        var ret= "<a href=javascript:AanmeldenVliegtuig(" + value + ");>";
                                        ret = ret + "<IMG SRC='images/aanmelden.png' border=0></a>";

                                        metaData.tdAttr = 'data-qtip="' + record.data.REGISTRATIE + '(' + record.data.CALLSIGN + ')  aanmelden voor vandaag."';

                                        return ret;
                                    }
                                }
                            },
                            width: 75,
                            align: 'center',
                            dataIndex: 'ID',
                            text: ''
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'REGISTRATIE',
                            text: 'Registratie'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CALLSIGN',
                            text: 'Callsign'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var ret = '<IMG SRC="images/seat.png" border=0>';
                                if (value == 2)
                                {
                                    ret = ret + '<IMG SRC="images/seat.png" border=0>';
                                }
                                return ret;
                            },
                            align: 'center',
                            dataIndex: 'ZITPLAATSEN',
                            text: 'Zitplaatsen'
                        },
                        {
                            xtype: 'booleancolumn',
                            align: 'center',
                            dataIndex: 'CLUBKIST',
                            text: 'Clubkist',
                            falseText: ' ',
                            trueText: '<IMG SRC="images/ok.png" border=0>'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 200,
                            dataIndex: 'VLIEGTUIGTYPE',
                            text: 'Type'
                        },
                        {
                            xtype: 'gridcolumn',
                            id: 'Flarm',
                            dataIndex: 'FLARM_CODE',
                            text: '<IMG SRC=\'images/flarm.gif\' border=0>'
                        },
                        {
                            xtype: 'booleancolumn',
                            align: 'center',
                            dataIndex: 'ZELFSTART',
                            text: 'Zelfstart',
                            falseText: ' ',
                            trueText: '<IMG SRC="images/ok.png" border=0>'
                        },
                        {
                            xtype: 'booleancolumn',
                            align: 'center',
                            dataIndex: 'SLEEPKIST',
                            text: 'Sleepkist',
                            falseText: ' ',
                            trueText: '<IMG SRC="images/ok.png" border=0>'
                        },
                        {
                            xtype: 'booleancolumn',
                            align: 'center',
                            dataIndex: 'TMG',
                            text: 'TMG',
                            falseText: ' ',
                            trueText: '<IMG SRC="images/ok.png" border=0>'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if ((record.data.CLUBKIST === "true") || appSettings.isBeheerder)
                                return "<a href=javascript:Ext.Hoofdscherm.Vliegtuigen_OpenLogboekWindow(" + record.data.ID + ");>Logboek</a>";
                                else
                                return "";
                            },
                            id: 'Logboek',
                            text: ''
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            id: 'Vliegtuigen_Bladwijzer',
                            width: 360,
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
                            store: 'VliegtuigenLijst_GridStore'
                        },
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'ButtonNieuwVliegtuig',
                                    icon: 'images/add.gif',
                                    text: 'Nieuw vliegtuig',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick2,
                                            scope: me
                                        }
                                    }
                                },
                                me.processVliegtuigen_ZoekenInVliegtuigenlijst({
                                    xtype: 'textfield',
                                    id: 'Vliegtuigen_ZoekenInVliegtuigenlijst',
                                    maxWidth: 200,
                                    minWidth: 200,
                                    width: 200,
                                    fieldLabel: 'Zoeken',
                                    labelAlign: 'right',
                                    listeners: {
                                        change: {
                                            fn: me.Vliegtuigen_ZoekenChange,
                                            delay: 500,
                                            single: false,
                                            buffer: 500,
                                            scope: me
                                        }
                                    }
                                }),
                                {
                                    xtype: 'tbspacer',
                                    width: 30
                                },
                                {
                                    xtype: 'checkboxfield',
                                    id: 'Vliegtuigen_ClubkistFilter',
                                    width: 100,
                                    fieldLabel: '',
                                    labelWidth: 0,
                                    boxLabel: 'Clubkisten',
                                    listeners: {
                                        change: {
                                            fn: me.Vliegtuigen_ClubkistFilterChange,
                                            delay: 500,
                                            buffer: 500,
                                            scope: me
                                        },
                                        render: {
                                            fn: me.onVliegtuigenClubkistFilterRender,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'tbspacer',
                                    flex: 1
                                },
                                {
                                    xtype: 'button',
                                    id: 'ButtonVerwijderenVliegtuig',
                                    enableToggle: true,
                                    icon: 'images/delete.png',
                                    text: 'Verwijderen',
                                    listeners: {
                                        render: {
                                            fn: me.onButtonVerwijderenVliegtuigRender,
                                            scope: me
                                        },
                                        toggle: {
                                            fn: me.onButtonVerwijderenVliegtuigToggle,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            listeners: {
                activate: {
                    fn: me.onPanelActivateVliegtuigen,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processVliegtuigen_ZoekenInVliegtuigenlijst: function(config) {
        config.plugins = ['clearbutton'];
        return config;
    },

    Vliegtuigen_GridviewItemDblClick: function(dataview, record, item, index, e, eOpts) {
        Ext.Hoofdscherm.Vliegtuigen_GridviewItemDblClick(dataview, record, item, index, e, eOpts);
    },

    onButtonClick2: function(button, e, eOpts) {
        var view = Ext.widget('VliegtuigBeheerWindow', {'ID': -1});
        view.show();
    },

    Vliegtuigen_ZoekenChange: function(field, newValue, oldValue, eOpts) {
        Ext.Hoofdscherm.Vliegtuigen_ZoekenChange(field, newValue, oldValue, eOpts);

    },

    Vliegtuigen_ClubkistFilterChange: function(field, newValue, oldValue, eOpts) {
        Ext.Hoofdscherm.Vliegtuigen_ClubkistFilterChange (field, newValue, oldValue, eOpts);
    },

    onVliegtuigenClubkistFilterRender: function(component, eOpts) {
        Ext.QuickTips.register({
            target: component.getEl(),
            text: 'Laat alleen de vliegtuigen van de club in het overzicht zien.'
        });
    },

    onButtonVerwijderenVliegtuigRender: function(component, eOpts) {
        Ext.QuickTips.register({
            target: component.getEl(),
            text: 'Verwijderen van een vliegtuig.'
        });
    },

    onButtonVerwijderenVliegtuigToggle: function(button, pressed, eOpts) {
        Ext.Hoofdscherm.Vliegtuigen_ButtonVerwijderenVliegtuig(button, pressed, eOpts);
    },

    onPanelActivateVliegtuigen: function(component, eOpts) {
        InitStores();		// voor het geval dat de gebruiker eerder dit tab activeert dan dat de sores geladen zijn

        if (!Ext.Hoofdscherm.CalcVliegtuigenGrid())
        {
            var store = Ext.data.StoreManager.lookup('VliegtuigenLijst_GridStore');
            store.slimLaden();
        }
    }

});