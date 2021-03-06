/*
 * File: app/model/LedenAanwezig_Model.js
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

Ext.define('GeZC_StartAdministratie.model.LedenAanwezig_Model', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'ID',

    fields: [
        {
            name: 'ID'
        },
        {
            name: 'LID_ID'
        },
        {
            name: 'NAAM'
        },
        {
            name: 'ACHTERNAAM'
        },
        {
            name: 'AANKOMST'
        },
        {
            name: 'VERTREK'
        },
        {
            name: 'VOORKEUR_VLIEGTUIG_ID'
        },
        {
            name: 'VOORKEUR_VLIEGTUIG_TYPE'
        },
        {
            name: 'VOORKEUR_TYPE'
        },
        {
            name: 'VOORKEUR_REGCALL'
        },
        {
            name: 'INSTRUCTEUR'
        },
        {
            name: 'AANWEZIG'
        },
        {
            name: 'GPL_VERLOOPT'
        },
        {
            name: 'MEDICAL_VERLOOPT'
        },
        {
            name: 'LIDTYPE_ID'
        },
        {
            name: 'OPMERKING'
        },
        {
            name: 'LAATSTE_STARTTIJD'
        },
        {
            name: 'HEEFT_BETAALD'
        },
        {
            name: 'VLIEGTIJD_VANDAAG'
        },
        {
            name: 'STARTLIJST_VANDAAG'
        },
        {
            name: 'ACTUELE_VLIEGTIJD'
        },
        {
            name: 'WACHTTIJD'
        },
        {
            name: 'VOLGEND_CALLSIGN'
        }
    ]
});