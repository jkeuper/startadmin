/*
 * File: app/model/LedenLijst_Model.js
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

Ext.define('GeZC_StartAdministratie.model.LedenLijst_Model', {
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
            name: 'NAAM'
        },
        {
            name: 'ACHTERNAAM'
        },
        {
            name: 'MOBIEL'
        },
        {
            name: 'TELEFOON'
        },
        {
            name: 'NOODNUMMER'
        },
        {
            name: 'GPL'
        },
        {
            name: 'INSTRUCTEUR'
        },
        {
            name: 'LIERIST'
        },
        {
            name: 'STARTLEIDER'
        },
        {
            name: 'LIDTYPE'
        },
        {
            name: 'LIDTYPE_ID'
        },
        {
            name: 'GPL_VERLOOPT'
        },
        {
            mapping: 'ID',
            name: 'LID_ID'
        },
        {
            name: 'AVATAR'
        }
    ]
});