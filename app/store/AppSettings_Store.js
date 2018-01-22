/*
 * File: app/store/AppSettings_Store.js
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

Ext.define('GeZC_StartAdministratie.store.AppSettings_Store', {
    extend: 'Ext.data.Store',

    requires: [
        'GeZC_StartAdministratie.model.AppSettings_Model',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'GeZC_StartAdministratie.model.AppSettings_Model',
            storeId: 'MyJsonStore20',
            remoteSort: true,
            proxy: {
                type: 'ajax',
                url: 'php/main.php?Config',
                reader: {
                    type: 'json'
                },
                listeners: {
                    exception: {
                        fn: me.onAjaxproxyException,
                        scope: me
                    }
                }
            },
            listeners: {
                load: {
                    fn: me.onJsonstoreLoad,
                    scope: me
                },
                beforeload: {
                    fn: me.onJsonstoreBeforeLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onAjaxproxyException: function(proxy, response, operation, eOpts) {
        HandleStoreLoadException(proxy, response, operation, eOpts);	// toon de gebruiker dat er een fout is opgetreden
    },

    onJsonstoreLoad: function(store, records, successful, operation, eOpts) {
        Ext.win.showLoading(false, store.storeId);		// verwijder window met melding van "ophalen data"

        // toon hoe veel tijd nodig is geweest voor het laden
        console.log(sprintf("%s: storeLoad storeId=%s processing time=%d msec", TijdStempel(), store.storeId, (new Date().getTime() - Ext.data.storeLoadStart[store.storeId])));

        appSettings = records[0].data;

        if(successful)
        {
            var h = Ext.getCmp('HoofdScherm');


            if (appSettings.isLocal)
            {
                h.child('#KaartTab').tab.show();	// toon de kaart niet (mag alleen in de toren)
            }
            else
            {
                // als we in de starttoren werken, mag er geen datum gekozen worden
                Ext.getCmp('StartlijstDatum').show();
            }


            // Als we niet mogen schrijven dan moeten we een aantal zaken verbergen
            if (!appSettings.MagSchrijven)
            {
                Ext.getCmp('DaginfoForm').disable();

                Ext.getCmp('ButtonNieuweVlucht').hide();
                Ext.getCmp('ButtonVerwijderenVlucht').hide();

                Ext.getCmp('ButtonNieuwLid').hide();
                Ext.getCmp('ButtonVerwijderenLid').hide();

                Ext.getCmp('ButtonNieuwVliegtuig').hide();
                Ext.getCmp('ButtonVerwijderenVliegtuig').hide();
            }
            else
            {
                Ext.getCmp('DaginfoForm').enable();

                Ext.getCmp('ButtonNieuweVlucht').show();
                Ext.getCmp('ButtonVerwijderenVlucht').show();

                Ext.getCmp('ButtonNieuwLid').show();
                Ext.getCmp('ButtonVerwijderenLid').show();

                Ext.getCmp('ButtonNieuwVliegtuig').show();
                Ext.getCmp('ButtonVerwijderenVliegtuig').show();

            }

            if ((appSettings.isBeheerder) || (appSettings.isBeheerderDDWV))
            {
                h.child('#ControleTab').tab.show();
            }

            // De beheerder kan de data exporteren
            if ((appSettings.isBeheerder) || (appSettings.isBeheerderDDWV))
            {
                Ext.getCmp('ExporteerButton').show();
                Ext.getCmp('StartlijstSleepFilter').show();
            }
            else
            {
                Ext.getCmp('ExporteerButton').hide();
                Ext.getCmp('StartlijstSleepFilter').hide();
            }


            var vandaag = new Date();
            var v = sprintf("%s-%s-%s", vandaag.getFullYear(), vandaag.getMonth()+1, vandaag.getDate());

            var datumVeld = Ext.getCmp('StartlijstDatum').getValue();
            if (datumVeld === null)
                datumVeld = new Date();

            // voor de dag van vandaag kunnen we het rooster tonen
            var d = sprintf("%s-%s-%s", datumVeld.getFullYear(), datumVeld.getMonth()+1, datumVeld.getDate());
            if (v == d)
            {
                Ext.getCmp('DagInfoRooster').show();
            }
            else
            {
                Ext.getCmp('DagInfoRooster').hide();
            }

        }
    },

    onJsonstoreBeforeLoad: function(store, operation, eOpts) {
        Ext.win.showLoading(true, store.storeId);						// toon window met melding van "ophalen data"

        Ext.data.storeLoadStart[store.storeId] = new Date().getTime();	// zet een begintijd om de performance te meten

        var datumVeld = Ext.getCmp('StartlijstDatum').getValue();

        if (datumVeld !== null)
        {
            var d = sprintf("%s-%s-%s", datumVeld.getFullYear(), datumVeld.getMonth()+1, datumVeld.getDate());
            store.getProxy().setExtraParam('_:datum', d);
        }
    }

});