/*
 * File: app/view/AanwezigTab.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
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

Ext.define('GeZC_StartAdministratie.view.AanwezigTab', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.aanwezigtab',

    requires: [
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.grid.View',
        'Ext.toolbar.Paging',
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer',
        'Ext.form.field.Checkbox'
    ],

    height: 250,
    id: 'AanwezigTab',
    width: 909,
    title: 'Aanwezig',

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
                    flex: 4,
                    store: 'Aanwezig_Leden_GridStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            width: 181,
                            dataIndex: 'NAAM',
                            text: 'Naam'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 74,
                            text: 'Aantal starts'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'VLIEGTIJD_VANDAAG',
                            text: 'Vliegtijd vandaag'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 55,
                            dataIndex: 'ACTUELE_VLIEGTIJD',
                            text: 'Vliegtijd'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'WACHTTIJD',
                            text: 'Wachttijd'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 74,
                            dataIndex: 'VOLGEND_CALLSIGN',
                            text: 'Ingedeeld'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 146,
                            dataIndex: 'VOORKEUR_TYPE',
                            text: 'Voorkeur types'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'VOORKEUR_REGCALL',
                            text: 'Voorkeur vliegtuig'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 288,
                            dataIndex: 'OPMERKING',
                            text: 'Opmerking',
                            flex: 4
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    flex: 1,
                    height: 32,
                    id: 'Aanwezig_Bladwijzer',
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
                    store: 'Aanwezig_Leden_GridStore'
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            icon: 'images/add.gif',
                            text: 'Toevoegen',
                            listeners: {
                                click: {
                                    fn: me.onButtonClick,
                                    scope: me
                                }
                            }
                        },
                        me.processZoekenAanwezig({
                            xtype: 'textfield',
                            id: 'ZoekenAanwezig',
                            maxWidth: 300,
                            fieldLabel: 'Zoeken',
                            labelAlign: 'right',
                            listeners: {
                                render: {
                                    fn: me.onZoekenAanwezigRender,
                                    scope: me
                                },
                                change: {
                                    fn: me.Aanwezig_ZoekenChange,
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
                            id: 'Aanwezig.InstructeurFilter',
                            width: 100,
                            fieldLabel: '',
                            boxLabel: 'Instructeurs',
                            listeners: {
                                change: {
                                    fn: me.Aanwezig_InstructeurFilterChange,
                                    delay: 500,
                                    buffer: 500,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'checkboxfield',
                            id: 'Aanwezig.LieristFilter',
                            width: 100,
                            fieldLabel: '',
                            boxLabel: 'Lieristen',
                            listeners: {
                                change: {
                                    fn: me.Aanwezig_LieristFilterChange,
                                    delay: 500,
                                    buffer: 500,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'checkboxfield',
                            id: 'Aanwezig.StartleiderFilter',
                            width: 100,
                            fieldLabel: '',
                            labelWidth: 0,
                            boxLabel: 'Startleiders',
                            listeners: {
                                change: {
                                    fn: me.Aanwezig_StartleiderFilterChange,
                                    delay: 500,
                                    buffer: 500,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            listeners: {
                activate: {
                    fn: me.onPanelActivate,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processZoekenAanwezig: function(config) {
        config.plugins = ['clearbutton'];
        return config;
    },

    onButtonClick: function(button, e, eOpts) {
        AanmeldenLidWindow(-1);
    },

    onZoekenAanwezigRender: function(component, eOpts) {
        Ext.QuickTips.register({
            target: component.getEl(),
            text: 'Zoek een naam in de lijst.'
        });
    },

    Aanwezig_ZoekenChange: function(field, newValue, oldValue, eOpts) {
        Ext.Hoofdscherm.Aanwezig_ZoekenChange(field, newValue, oldValue, eOpts);
    },

    Aanwezig_InstructeurFilterChange: function(field, newValue, oldValue, eOpts) {
        Ext.Hoofdscherm.Aanwezig_InstructeurFilterChange(field, newValue, oldValue, eOpts);

    },

    Aanwezig_LieristFilterChange: function(field, newValue, oldValue, eOpts) {
        Ext.Hoofdscherm.Aanwezig_LieristFilterChange(field, newValue, oldValue, eOpts);

    },

    Aanwezig_StartleiderFilterChange: function(field, newValue, oldValue, eOpts) {
        Ext.Hoofdscherm.Aanwezig_StartleiderFilterChange(field, newValue, oldValue, eOpts);
    },

    onPanelActivate: function(component, eOpts) {
        Ext.data.StoreManager.lookup('Aanwezig_Leden_GridStore').slimLaden();

    }

});