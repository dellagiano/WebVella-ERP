﻿/* WebVella ERP English translation file */

/**
* @desc key value translation file for English language
* @author Bozhidar Zashev
* @company WebVella
* @website www.webvella.com
*/

var translationsEN = {
	ACTION: 'Action',
	ACTION_NAME_PLACEHOLDER: 'e.g. print_record',
	ADD: 'Add',
	ADD_ACTION: 'Add action',
	ADD_NEW: 'Add New',
	ADD_NEW_TAB: 'Add New Tab',
	ADD_OPTION: 'Add Option',
	ADMINISTRATION_ABBR: 'Admin',
	ADMINISTRATION: 'Administration',
	ADMINISTRATION_CORE: 'Core Admin',
	ALL: 'All',
	AMBER: 'Amber',
	ANY: 'Any',
	AREA_ATTACH_ENTITY: 'Attach Entity',
	AREA_ATTACH_ENTITY_NO_MORE_PLACEHOLDER: 'No more entities can be attached!',
	AREA_ATTACH_ENTITY_REQUIREMENTS_PLACEHOLDER: 'Entities that have least one default view and list are available',
	AREA_ATTACH_URL: 'Attach URL',
	AREA_ATTACH_URL_DESCRIPTION: 'If you attach link to a view of a specific record id, use "/nsb/" instead of "/sb/" to render the view with the area sidebar.<br/> e.g."/#/areas/sales/customer/view-general/nsb/general/380576b0-55d0-42e2-b9aa-a158b7404fa1"',
	AREA_ATTACH_URL_ICON_PLACEHOLDER: 'URL icon',
	AREA_ATTACH_URL_LABEL_PLACEHOLDER: 'URL label',
	AREA_ATTACH_URL_WEIGHT_PLACEHOLDER: 'URL weight',
	AREA_ATTACH_URL_URL_PLACEHOLDER: 'relative or absolute URL',
	AREA_ATTACHED_ITEMS: 'Attached items',
	AREA_NO_ATTACHED_ITEMS_MESSAGE: 'No items are attached to this area yet',
	AREA_DELETE:'Delete area',
	AREA_DELETE_MODAL_TITLE:'Delete an area',
	AREA_DELETE_MODAL_QUESTION:'Are you sure that you need this area deleted?',
	AREA_FOLDER_NAME: 'Folder name',
	AREA_FOLDER_NAME_PLACEHOLDER: 'e.g. CRM',
	AREA_FOLDER_NAME_DESCRIPTION: 'areas with the same folder label will be grouped',
	AREA_LIST: 'Areas List',
	AREA_NAME: 'Area name',
	AREA_NAME_PLACEHOLDER: 'e.g. sales',
	AREA_LABEL_PLACEHOLDER: 'e.g. Sales',
	AREA_SAVE: 'Save Area',
	AREA_SAVE_SUCCESS: 'The area was successfully saved',
	AREAS: 'Areas',
	ASSIGN_ROLES:'Assign roles',
	ATTRIBUTES: 'Attributes',
	AUDITABLE: 'Auditable',
	AUDITABLE_FIELD_CHECKBOX_LABEL: 'change history should be kept for this field',
	AUTHOR:'Author',
	AVAILABLE_AREAS: 'Available areas',
	AVAILABLE_ENTITIES: 'Available entities',
	BACK: 'Back',
	BLUE: 'Blue',
	BROWN: 'Brown',
	BROWSE: 'Browse',
	CANCEL: 'Cancel',
	CHECKBOX_TRUE_LABEL: 'set as TRUE',
	CLICK_HERE:'Click here',
	COLOR: 'Color',
	COLUMNS: 'Columns',
	COMPANY:'Company',
	CREATE: 'Create',
	CREATE_NEW_AREA: 'Create new area',
	CSS_CLASS:'CSS Class',
	CYAN: 'Cyan',
	CURRENCY: 'Currency',
	CUSTOM_DATA_SOURCE:'Data Source',
	CUSTOM_DATA_SOURCE_DESCRIPTION:'Leave empty for system generated data. URL used to GET the JSON for the "data" property of the item JSON. The system automatically will add some necessary query parameters.',
	CUSTOM_TEMPLATE: 'HTML Template',
	CUSTOM_TEMPLATE_DESCRIPTION: 'Leave empty for system generated template. URL to a customer HTML template file that should substitute the default view HTML template. It will be compiled by angular, and view data and meta are accessible.',
	DELETE_CONFIRMATION_ALERT_MESSAGE:'Are you sure?',
	DATA_LINK_QUERY_MODAL_TITLE: 'Data link schema for query rule',
	DATA_LINK_QUERY_MODAL_INTRO: 'In the input of this query rule row, you can set a static value or a dynamic one. The static value will be used as is. You can dynamically pass values to the query rule by using predefined data-link JSON objects.',
	DATA_LINK_QUERY_MODAL_CURRENT_DATE_NAME_DESCRIPTION:'Get and manipulates the current date in UTC.',
	DATA_LINK_QUERY_MODAL_CURRENT_DATE_OPTION_DESCRIPTION:'Sets as query value, the ZERO HOUR date or the exact current date and hour in UTC',
	DATA_LINK_QUERY_MODAL_CURRENT_DATE_DEFAULT_DESCRIPTION:'No need for default value as current date is always available.',
	DATA_LINK_QUERY_MODAL_CURRENT_DATE_SETTINGS_DESCRIPTION:'with the settings object you can manipulate the current date or datetime, by subtracting or adding periods to it.<br /> Example: "year":-1, will mean that you want the result date or datetime to be the current one minus 1 year.',
	DATA_LINK_QUERY_MODAL_CURRENT_USER_NAME_DESCRIPTION:'Check the currently authenticated user, if there is such.',
	DATA_LINK_QUERY_MODAL_CURRENT_USER_OPTION_DESCRIPTION:'As query value is set the "id" field of the current user. This is the only option available for now',
	DATA_LINK_QUERY_MODAL_CURRENT_USER_DEFAULT_DESCRIPTION:'If there is no authenticated user, the returned value can be replaces with "guid" of your own. Set "null", if you do not want a default value, in which case the query rule will NOT be applied at all when there is no authenticated user.',
	DATA_LINK_QUERY_MODAL_CURRENT_USER_SETTINGS_DESCRIPTION:'There are not settings for this data-link object currently, so you need to set an empty object.',
	DATA_LINK_QUERY_MODAL_URL_QUERY_NAME_DESCRIPTION:'The list controller will check the query parameters for keys that match the set string in the "options" attribute. If no match is found, it will use the default value. More than one rule can match the same query parameter key. <strong>The query parameter value should be encoded.</strong> The same value needs to be converted without an error to the data format of the selected rule field. If an error occurs the default value will be returned instead.',
	DATA_LINK_QUERY_MODAL_URL_QUERY_OPTION_DESCRIPTION:'The query key that needs to be matched. It needs to comply with the rules for the url strings.',
	DATA_LINK_QUERY_MODAL_URL_QUERY_DEFAULT_DESCRIPTION:'If not "null", the value needs to be converted without an error to the data format of the selected rule field. If an error occurs, a query validation error will be generated by the system. The data and DateTime value format is expected to be in ISO 8601 format, in UTC and without timezone (e.g. "2016-04-13T12:23:46Z"). If the default value is set to "null", the rule will not be applied, if a query parameter is not matched.',
	DATA_LINK_QUERY_MODAL_URL_QUERY_SETTINGS_DESCRIPTION:'there are not settings for this data-link object currently, so you need to set an empty object.',
	DATA_LINK_SORT_MODAL_TITLE: 'Manage data link for the sort',
	DATA_LINK_SORT_MODAL_INTRO: 'In the input of this sort row, you can set the field name in a static or a dynamic way. The static field name will be used as is. If you the data-link JSON schema below, you will be able dynamically through the query parameters to change the sort field name and order.',
	DATA_LINK_SORT_MODAL_NAME_DESCRIPTION:'Activates the ability to manage the sorted column and order through url query parameters. Currently only fields from the list entity can be sorted.',
	DATA_LINK_SORT_MODAL_OPTION_DESCRIPTION:'The query parameter key that should be matched for the sorted field name. For the use in the core administration, this should be set to "sortBy", as this is how the core administration lists expect it to be',
	DATA_LINK_SORT_MODAL_DEFAULT_DESCRIPTION:'The field name for the default sort. The default sort order is always ascending. If set to "null", the list will not be sorted if a query key is not matched with the option value.',
	DATA_LINK_SORT_MODAL_SETTINGS_DESCRIPTION:'The query parameter key that should be matched to check for the sort order. The supported values for the query are "ascending" and "descending". The core administration lists expect the "order" property value to be "sortOrder".',
	DATE_PLACEHOLDER: 'e.g. 2014-11-01',
	DATE_FORMAT_PLACEHOLDER: 'e.g. yyyy-MM-dd',
	DATETIME_PLACEHOLDER: 'e.g. 2014-11-01 23:01',
	DATETIME_FORMAT_PLACEHOLDER: 'e.g. dd MMM yyyy HH:mm',
	DATETIME_USER_CURRENT_AS_DEFAULT: 'Use Current Time as Default',
	DATETIME_USER_CURRENT_AS_DEFAULT_CHECKBOX_LABEL: 'use the date of the record generation as default',
	DECIMAL_PLACES: 'Decimal Places',
	DEEP_ORANGE: 'Deep Orange',
	DEEP_PURPLE: 'Deep Purple',
	DEFAULT: 'Default',
	DEFAULT_VALUE: 'Default value',
	DEFAULT_VALUE_CHECKBOX_LABEL: 'make it checked by default',
	DELETE: 'Delete',
	DELETE_FILE: 'Delete file',
	DELETE_LOCKED: 'Delete locked',
	DESCRIPTION: 'Description',
	DETAILS: 'Details',
	DIRECTION: 'Direction',
	DISPLAY_FORMAT: 'Display format',
	EMAIL:'Email',
	EMAIL_PLACEHOLDER:'e.g. email@domain.com',
	EMPTY:'Empty',
	ENABLED:'Enabled',
	ENABLED_CHECKBOX_LABEL:'enabled',
	ENCRYPTION: 'Encryption',
	ENCRYPTION_CHECKBOX_LABEL: 'the data should be stored encrypted in the database',
	ENTITY: 'Entity',
	ENTITIES: 'Entities',
	ENTITY_CREATE:'Create Entity',
	ENTITY_CREATE_SUCCESS: 'The entity was successfully created',
	ENTITY_DELETE:'Delete entity',
	ENTITY_DELETE_MODAL_TITLE:'Delete this entity',
	ENTITY_DELETE_MODAL_QUESTION:'Are you sure that you need this entity deleted?',
	ENTITY_DELETE_MODAL_DESCRIPTION:'By deleting the <b>{{name}}</b> entity you will also <b>delete all its records</b>?',
	ENTITY_DELETE_LOCKED_MESSAGE:'System entities cannot be deleted',
	ENTITY_CREATE_MODAL_TITLE: 'Create new entity',
	ENTITY_FIELDS: 'Entity Fields',
	ENTITY_NAME: 'Entity Name',
	ENTITY_NAME_PLACEHOLDER: 'e.g. customer',
	ENTITY_LABEL_PLACEHOLDER: 'e.g. Customer',
	ENTITY_LABEL_PLURAL_PLACEHOLDER: 'e.g. Customers',
	ENTITY_RELATIONS:'Entity relations',
	ERROR_IN_RESPONSE: 'error in response!',
	ERROR_MESSAGE_LABEL: '<span class="go-red">Error:</span>',
	EVENT_HOOKS_REGISTER_ERROR: 'The executeOnHookFunction argument is not a function or missing',
	FALSE:'False',
	FIRST:'First',
	FIELD:'Field',
	FIELD_CREATE:'Create Field',
	FIELD_CREATE_MODAL_TITLE:'Create <span class="go-red">{{label}}</span> field',
	FIELD_CREATE_MODAL_FOOTER_MESSAGE:'To proceed, press the Select button of a filed type',
	FIELD_DATABIND_NOTE_1:'You can get this field data in a dynamic template by:',
	FIELD_DATABIND_NOTE_2:'[0] is the index of the record in the list. List meta is accessible via:',
	FIELD_DELETE:'Delete Field',
	FIELD_DELETE_MODAL_TITLE:'Delete a field',
	FIELD_DELETE_MODAL_QUESTION:'Are you sure that you need this field deleted?',
	FIELD_DELETE_MODAL_WARNING:'By deleting the <b>{{label}}</b> field you will also <b>delete all its values</b>?',
	FIELD_LABEL_PLACEHOLDER: 'e.g. Field Name',
	FIELD_NAME: 'Field name',
	FIELD_NAME_PLACEHOLDER: 'e.g. field_name',
	FIELD_MANAGE_MODAL_TITLE:'Manage <span class="go-red">{{label}}</span> field',
	FIELD_SAVE:'Save Field',
	FIELD_SECURITY: 'Field Security',
	FIELD_SECURITY_CHECKBOX_LABEL:'enable field security',
	FIELD_TYPE: 'Field type',
	FIELDS: 'Fields',
	FIELDS_COUNT: '# fields',
	FIELD_TYPE_AUTONUMBER_LABEL: 'Auto increment number',
	FIELD_TYPE_AUTONUMBER_DESCRIPTION: 'If you need a automatically incremented number with each new record, this is the field you need. You can customize the display format also.',
	FIELD_TYPE_CHECKBOX_LABEL:'Checkbox',
	FIELD_TYPE_CHECKBOX_DESCRIPTION:'The simple on and off switch. This field allows you to get a True (checked) or False (unchecked) value.',
	FIELD_TYPE_CURRENCY_LABEL:'Currency',
	FIELD_TYPE_CURRENCY_DESCRIPTION:'A currency amount can be entered and will be represented in a suitable formatted way',
	FIELD_TYPE_DATE_LABEL:'Date',
	FIELD_TYPE_DATE_DESCRIPTION:'A data pickup field, that can be later converting according to a provided pattern',
	FIELD_TYPE_DATETIME_LABEL:'Date & Time',
	FIELD_TYPE_DATETIME_DESCRIPTION:'A date and time can be picked up and later presented according to a provided pattern',
	FIELD_TYPE_EMAIL_LABEL:'Email',
	FIELD_TYPE_EMAIL_DESCRIPTION:'An email can be entered by the user, which will be validated and presented accordingly',
	FIELD_TYPE_FILE_LABEL:'File',
	FIELD_TYPE_FILE_DESCRIPTION:'File upload field. Files will be stored within the system.',
	FIELD_TYPE_HTML_LABEL:'HTML',
	FIELD_TYPE_HTML_DESCRIPTION:'Provides the ability of entering and presenting an HTML code. Supports multiple input languages.',
	FIELD_TYPE_IMAGE_LABEL:'Image',
	FIELD_TYPE_IMAGE_DESCRIPTION:'Image upload field. Images will be stored within the system',
	FIELD_TYPE_TEXTAREA_LABEL:'Textarea',
	FIELD_TYPE_TEXTAREA_DESCRIPTION:'A textarea for plain text input. Will be cleaned and stripped from any web unsafe content',
	FIELD_TYPE_MULTISELECT_LABEL:'Multiple select',
	FIELD_TYPE_MULTISELECT_DESCRIPTION:'Multiple values can be selected from a provided list',
	FIELD_TYPE_NUMBER_LABEL:'Number',
	FIELD_TYPE_NUMBER_DESCRIPTION:'Only numbers are allowed. Leading zeros will be stripped.',
	FIELD_TYPE_PASSWORD_LABEL:'Password',
	FIELD_TYPE_PASSWORD_DESCRIPTION:'This field is suitable for submitting passwords or other data that needs to stay encrypted in the database',
	FIELD_TYPE_PASSWORD_NOT_SEARCHABLE_DESCRIPTION:'password cannot be searchable',
	FIELD_TYPE_PERCENT_LABEL:'Percent',
	FIELD_TYPE_PERCENT_DESCRIPTION:'This will automatically present any number you enter as a percent value',
	FIELD_TYPE_PHONE_LABEL:'Phone',
	FIELD_TYPE_PHONE_DESCRIPTION:'Will allow only valid phone numbers to be submitted',
	FIELD_TYPE_GUID_LABEL:'Identifier GUID',
	FIELD_TYPE_GUID_DESCRIPTION:'Very important field for any entity to entity relation and required by it',
	FIELD_TYPE_DROPDOWN_LABEL:'Dropdown',
	FIELD_TYPE_DROPDOWN_DESCRIPTION:'One value can be selected from a provided list',
	FIELD_TYPE_TEXT_LABEL:'Text',
	FIELD_TYPE_TEXT_DESCRIPTION:'A simple text field. One of the most needed field nevertheless',
	FIELD_TYPE_URL_LABEL:'URL',
	FIELD_TYPE_URL_DESCRIPTION:'This field will validate local and static URLs. Will present them accordingly',
	FIELD_TYPE_TREESELECT_LABEL:'Tree select',
	FIELD_TYPE_TREESELECT_DESCRIPTION:'select related records from an entity tree structure. Suitable for categories, organizational charts and etc.',
	FILE_PLACEHOLDER:'e.g. http://mydomain.com/file.pdf or /assets/file.pdf',
	FILE_UPLOAD_ALMOST_DONE:'almost done...',
	FIRST_NAME:'First name',
	GENERAL: 'General',
	GENERAL_SETTINGS: 'General settings',
	GET_COMPLETE_RESPONSE:'Get Complete Response',
	GET_DATA_SAMPLE:'Get Data Sample',
	GRANTED: 'Granted',
	GREEN: 'Green',
	GOTO_DESKTOP_LINK_TITLE: 'Go to the desktop',
	GUID_INPUT_PLACEHOLDER:'fill in a GUID',
	GUID_AUTOGENERATED_PLACEHOLDER:'will be auto-generated',
	GUID_GENERATION:'GUID Generation',
	GUID_GENERATION_CHECKBOX_LABEL:'automatically generate new GUID as default',
	HELP_TEXT: 'Help text',
	HIDDEN: 'Hidden',
	HTML_PLACEHOLDER: 'e.g. some html code',
	ID:'Id',
	ICON: 'Icon',
	ICON_NAME: 'Icon name',
	ICON_NAME_DESCRIPTION:'review all icons in <a href="http://fortawesome.github.io/Font-Awesome/icons/" target="_blank">Font Awesome site</a> ',
	ICON_NAME_PLACEHOLDER: 'e.g. database',
	IMAGE:'Image',
	IMAGE_PLACEHOLDER:'e.g. /assets/image.png',
	IN_LIBRARY: 'In Library',
	INFO: 'Info',
	INDIGO: 'Indigo',
	ITEM: 'Item',
	LABEL: 'Label',
	LABEL_PLURAL: 'Label Plural',
	LAST_NAME:'Last Name',
	LIBRARY: 'Library',
	LIGHT_BLUE: 'Light Blue',
	LIGHT_GREEN: 'Light Green',
	LIME: 'Lime',
	LIST: 'List',
	LISTS_COUNT: '# lists',
	LIST_EMPTY_MESSAGE: '<strong>No results!</strong><br/>There are no results for your query. Either there are none existing yet or you need to adjust your query parameters. ',
	LIST_QUICK_CREATE:'Quick create',
	LOG_OUT: 'Log out',
	LOOKUP: 'Lookup',
	LOOKUP_LIST: 'Lookup list',
	MANAGE_ACTION: 'Manage action',
	MANAGE_AREA_X: 'Manage area <span class="go-green">{{name}}</span>',
	MANAGE_CODE: 'Manage Code',
	MAXIMUM_LENGTH: 'Maximum Length',
	MAXIMUM_VALUE: 'Maximum value',
	MENU:'Menu',
	MINIMUM_VALUE: 'Minimum value',
	NAME: 'Name',
	NEXT: 'Next',
	NO_ACCESS_TO_AREA: '<span class="go-red">No access:</span> You do not have access to this area',
	ONE_OPTION_IS_REQUIRED: 'You need to select at least one option as default, when the field is required',
	OPTIONS: 'Options',
	ORANGE: 'Orange',
	ORIGIN: 'Origin',
	PAGE_SIZE: 'Page size',
	PAGE_SIZE_DESCRIPTION: 'zero for unlimited',
	PASSWORD:'Password',
	PASSWORD_CHANGE_WITH:'Change Password with',
	PASSWORD_MASK_TYPE: 'Mask type',
	PASSWORD_MASK_TYPE_NONE: 'None',
	PASSWORD_MASK_TYPE_ALL_CHARS: 'Mask all characters',
	PASSWORD_MASK_TYPE_SHOW_LAST_4: 'Show only the last 4 chars',
	PASSWORD_MASK_TYPE_CREDIT_CARD: 'Credit Card Number',
	PASSWORD_MASK_TYPE_INSURANCE_NUMBER: 'National Insurance Number',
	PASSWORD_MASK_TYPE_SSN: 'Social Security Number',
	PASSWORD_MASK_TYPE_SIN: 'Social Insurance Number',
	PARENT_ID: 'Parent id',
	PINK: 'Pink',
	PLACE: 'Place',
	PLUGINS: 'Plugins',
	PLUGINS_PAGE_TITLE: 'Installed Plugins',
	PLACEHOLDER_TEXT: 'Placeholder text',
	PRESENTATION_FORMAT: 'Presentation Format',
	PREVIOUS: 'Previous',
	QUERY:'Query',
	QUERY_RULE_CONDITION_SUFIX:'of these rules should be true. As rule value you need to type a field name or a data link JSON object',
	QUERY_RULE_EQ_LABEL:'is equal to',
	QUERY_RULE_NOT_LABEL:'is not equal to',
	QUERY_RULE_LT_LABEL:'is less than',
	QUERY_RULE_LTE_LABEL:'is less than or equal',
	QUERY_RULE_GT_LABEL:'is greater than',
	QUERY_RULE_GTE_LABEL:'is greater than or equal',
	QUERY_RULE_CONTAINS_LABEL:'contains',
	QUERY_RULE_NOT_CONTAINS_LABEL:'does not contain',
	QUERY_RULE_STARTSWITH_LABEL:'starts with',
	QUERY_RULE_NOT_STARTSWITH_LABEL:'does not start with',
	QUERY_RULE_ADD:'add rule',
	QUERY_SECTION_ADD:'add section',
	PURPLE: 'Purple',
	READ: 'Read',
	RECORD_ID:'Record id',
	RECORD_LIST_CLONE_AS_EXISTING_CHECKBOX_LABEL:'Clone as existing',
	RECORD_LIST_CLONE_AS_NEW_CHECKBOX_LABEL:'Clone as new',
	RECORD_LIST_COLUMNS_WIDTH_CSV: 'Columns width CSV',
	RECORD_LIST_COLUMNS_WIDTH_CSV_DESCRIPTION: 'Note: the actions column is ignored. e.g. "25%,auto,100px"',
	RECORD_LIST_COLUMNS_RELATION_MODAL_TITLE: 'Relation Item settings',
	RECORD_LIST_COPY:'Copy list',
	RECORD_LIST_COPY_MODAL_TITLE:'Copy list',
	RECORD_LIST_CREATE:'Create list',
	RECORD_LIST_CREATE_MODAL_TITLE:'Create list',
	RECORD_LIST_CSS_CLASS_DESCRIPTION: 'e.g. "hide-header", "table-noborder", "width-2000", "width-2500","width-3000"',
	RECORD_LIST_DELETE: 'Delete list',
	RECORD_LIST_DELETE_MODAL_TITLE: 'Delete a list',
	RECORD_LIST_DELETE_MODAL_QUESTION: 'Are you sure that you need this list deleted?',
	RECORD_LIST_MANAGE_SERVICE_CODE_MODAL_TITLE: 'Manage Service Code',
	RECORD_LIST_MANAGE_SERVICE_CODE_MODAL_DESCRIPTION_1: 'Leave <b>empty</b> for the default service to be loaded. If you want to customize it,',
	RECORD_LIST_MANAGE_SERVICE_CODE_MODAL_DESCRIPTION_2: 'to prefill the current default code.',
	RECORD_LIST_LABEL_PLACEHOLDER:'e.g. Simple list',
	RECORD_LIST_NAME:'List name',
	RECORD_LIST_NAME_PLACEHOLDER:'e.g. simple_list',
	RECORD_LIST_TITLE_PREFIX: 'Record list:',
	RECORD_LIST_TAB_ACTIONS_PAGE_TITLE: 'Record list > Actions',
	RECORD_LIST_TAB_ACTIONS_NAME_UNIQUE_DESCRIPTION:'should be unique for this list',
	RECORD_LIST_TAB_ACTIONS_SERVICE_TITLE: 'Service Javascript',
	RECORD_LIST_TAB_ACTIONS_SERVICE_DESCRIPTION: 'Click the button below to review or manage the script that is used with the action templates.',
	RECORD_LIST_TAB_ACTIONS_SERVICE_STATUS_DEFAULT: 'status: <span class="go-green">the default service code is loaded</span>',
	RECORD_LIST_TAB_ACTIONS_SERVICE_STATUS_CUSTOM: 'status: <span class="go-orange">custom service code is loaded</span>',
	RECORD_LIST_TAB_ACTIONS_TEMPLATES_TITLE: 'Actions templates',
	RECORD_LIST_TAB_ACTIONS_TEMPLATES_DESCRIPTION: 'Here are defined what actions the user can perform with the list or its records.',
	RECORD_LIST_TAB_BASIC: 'Basic Attributes',
	RECORD_LIST_TAB_BASIC_PAGE_TITLE: 'Record list > Basic Attributes',
	RECORD_LIST_TAB_COLUMNS_PAGE_TITLE: 'Record list > Columns',
	RECORD_LIST_TAB_COLUMNS_INFO_TITLE: 'List filters and sort in the core administration',
	RECORD_LIST_TAB_COLUMNS_INFO_INTRO: 'For a column to have sort and filter, there is a general requirement its field "searchable" option to be checked. This will create a database index and speed the process significantly.',
	RECORD_LIST_TAB_COLUMNS_INFO_FINAL:	'All these options and rules apply to server API call too.',
	RECORD_LIST_TAB_COLUMNS_INFO_FILTER_PREFIX:	'<strong>Enable column filter</strong> - as addition to the general rule above, there should be a query rule with activated data link "url_query" in its value and the option property of the data link should match the field name. There should be such a query rule in a AND section, for each column you want to be filtered. To read more about the query data link, click on the ',
	RECORD_LIST_TAB_COLUMNS_INFO_FILTER_SUFIX:' button in the beginning of each query rule row.',
	RECORD_LIST_TAB_COLUMNS_INFO_SORT_PREFIX:'<strong>Enable column sort</strong> - as addition to the general rule above, there should be one sort rule with activated data link "url_sort", according to the schema available by clicking on the ',
	RECORD_LIST_TAB_COLUMNS_INFO_SORT_SUFIX:' button in the beginning of each sort rule row.',
	RECORD_LIST_TAB_COLUMNS_WARNING:'The following columns may not apply as custom HTML template and/or custom Data source are used in this list',
	RECORD_LIST_TAB_DATA:'Sample Data',
	RECORD_LIST_TAB_DATA_DEFAULT_SERVICE:'Default service',
	RECORD_LIST_TAB_DATA_CUSTOM_DATASOURCE:'Custom data source',
	RECORD_LIST_TAB_QUERY_SORT_PAGE_TITLE: 'Record list > Query & Sort',
	RECORD_LIST_TAB_QUERY_WARNING:'The following query and sort settings may not be applied. The data for this view, will be generated from the external url <a href="{{url}}">{{url}}</a>',
	RECORD_LIST_TAB_COLUMNS: 'Columns',
	RECORD_LIST_COLUMNS_SECTION_NOTE: 'Selected columns <small class="go-gray">| Record Id is always injected in the data.</small>',
	RECORD_LIST_TAB_QUERY_SORT: 'Query & Sort',
	RECORD_LIST_TAB_QUERY_ACTIONS: 'Actions',
	RECORD_LIST_VISIBLE_COLUMNS_COUNT: 'Visible columns #',
	RECORD_LISTS: 'Record Lists',
	RECORD_LISTS_PAGE_TITLE:'Record Lists',
	RECORD_PERMISSIONS: 'Record Permissions',
	RECORD_TREE: 'Record Tree',
	RECORD_TREE_CREATE: 'Create tree',
	RECORD_TREE_CREATE_MODAL_TITLE: 'Create tree',
	RECORD_TREE_CREATE_MODAL_ERROR: 'There needs to be at least one relation matching the condition:<br/> - Only 1:N and N:N relations, where the current entity is both origin and target',
	RECORD_TREE_DELETE: 'Delete tree',
	RECORD_TREE_DELETE_MODAL_TITLE: 'Delete a tree',
	RECORD_TREE_DELETE_MODAL_QUESTION: 'Are you sure that you need this tree deleted?',
	RECORD_TREE_DEPTH_LIMIT: 'Depth limit',
	RECORD_TREE_NODE_ID_FIELD: 'Node Id field',
	RECORD_TREE_NODE_ID_FIELD_DESCRIPTION: 'relation origin field',
	RECORD_TREE_NODE_LABEL_FIELD: 'Node label field',
	RECORD_TREE_NODE_LABEL_FIELD_DESCRIPTION: 'only required "auto increment", "unique identifier" and "text" fields',
	RECORD_TREE_NODE_NAME_FIELD: 'Node name field',
	RECORD_TREE_NODE_NAME_FIELD_DESCRIPTION: 'only required "auto increment", "unique identifier" and "text" fields. Used for URL generation',
	RECORD_TREE_NODE_NAME_FIELD_ALERT: 'There are no eligible field.  only required "auto increment", "unique identifier" and "text" fields. Used for URL generation',
	RECORD_TREE_NODE_OBJECT_PROPERTIES_HEADING: 'Node object properties',
	RECORD_TREE_NODE_PARENT_ID_FIELD: 'Node Parent Id field',
	RECORD_TREE_NODE_PARENT_ID_FIELD_DESCRIPTION: 'relation target field',
	RECORD_TREE_NODE_WEIGHT_FIELD: 'Node weight field',
	RECORD_TREE_NODE_WEIGHT_FIELD_DESCRIPTION: 'only required "auto increment" and "number" fields. Sort is ascending',
	RECORD_TREE_NODE_WEIGHT_FIELD_ALERT: 'There are no eligible field.  Only required "auto increment" and "number" fields. Sort is ascending',
	RECORD_TREE_LABEL_PLACEHOLDER: 'e.g. Category tree',
	RECORD_TREE_LIST_PAGE_TITLE:'Record trees',
	RECORD_TREE_MANAGE_BASIC_HEADING:'Basic info',
	RECORD_TREE_MANAGE_PAGE_TITLE:'Manage tree',
	RECORD_TREE_MANAGE_NODES_NO_ITEMS_ALERT:'No tree nodes found. If there are existing records for this entity, check the root tree nodes configuration	',
	RECORD_TREE_MULTI_SELECT_OPTION_VALUE:'can select many nodes',
	RECORD_TREE_NAME: 'Tree name',
	RECORD_TREE_NAME_PLACEHOLDER: 'e.g. category_tree',
	RECORD_TREE_OPTIONS: 'Tree options',
	RECORD_TREE_PAGE_TITLE:'Records tree',
	RECORD_TREE_REFRESHED:'Record tree refreshed',
	RECORD_TREE_CANNOT_REINIT_DUE_TO:'Cannot reinitialize the tree, due to',
	RECORD_TREE_CANNOT_SET_AS_PARENT_DUE_TO:'Cannot reinitialize the tree, due to',
	RECORD_TREE_RELATED_ENTITY:'Related Entity with the tree',
	RECORD_TREE_RELATED_ENTITY_DESCRIPTION:'entities that have 1:N or N:N relations as origin with the current and have existing trees',
	RECORD_TREE_RELATION_LABEL:'Relation between the current and target entity',
	RECORD_TREE_ROOT_NODES:'Root nodes',
	RECORD_TREE_ROOT_NODES_HEADING: 'Branches Root nodes',
	RECORD_TREE_ROOT_NODES_MISSING_ALERT:'No records are selected as root nodes yet',
	RECORD_TREE_SAVE_SUCCESS_MESSAGE:'The tree was successfully saved',
	RECORD_TREE_SELECTION_TARGET:'Selection target',
	RECORD_TREE_SELECTION_TYPE:'Selection type',
	RECORD_TREE_SINGLE_BRANCH_SELECT_OPTION_VALUE:'can select only one node in branch',
	RECORD_TREE_SINGLE_SELECT_OPTION_VALUE:'can select only one',
	RECORD_TREE_TARGET_ALL_NODES_OPTION_VALUE:'all nodes can be selected',
	RECORD_TREE_TARGET_ONLY_LEAVES_OPTION_VALUE:'only leaves - nodes with no children',
	RECORD_TREE_USED_RELATION:'Used Entity Relation',
	RECORD_TREE_USED_RELATION_DESCRIPTION:'allowed are 1:N relations, where the current entity is both origin and target',
	RECORD_TREES: 'Record Trees',
	RECORD_VIEW_CLONE_AS_NEW_CHECKBOX_LABEL:'Clone as new',
	RECORD_VIEW_CLONE_AS_EXISTING_CHECKBOX_LABEL:'Clone as existing',
	RECORD_VIEW_COPY:'Copy view',
	RECORD_VIEW_COPY_MODAL_TITLE:'Copy view',
	RECORD_VIEW_CREATE:'Create view',
	RECORD_VIEW_CREATE_MODAL_TITLE:'Create view',
	RECORD_VIEW_DEFAULT_CHECKBOX_LABEL:'Make this default view',
	RECORD_VIEW_DELETE: 'Delete view',
	RECORD_VIEW_DELETE_MODAL_TITLE: 'Delete view',
	RECORD_VIEW_DELETE_MODAL_QUESTION: 'Are you sure that you need this view deleted?',
	RECORD_VIEW_LABEL_PLACEHOLDER:'e.g. Short details',
	RECORD_VIEW_LIST_PAGE_TITLE:'Record views',
	RECORD_VIEW_MANAGE_PAGE_TITLE_PREFIX:'View name',
	RECORD_VIEW_MANAGE_PAGE_TITLE:'Manage view',
	RECORD_VIEW_NAME:'View Name',
	RECORD_VIEW_NAME_PLACEHOLDER:'e.g. short_details',
	RECORD_VIEW_REGION_CREATE_MODAL_TITLE:'Create new region',
	RECORD_VIEW_REGION_MANAGE_MODAL_TITLE:'Manage region attributes',
	RECORD_VIEW_RELATION_ITEM_MANAGE_MODAL_TITLE:'Relation Item settings',
	RECORD_VIEW_ROW_ADD:'add row here',
	RECORD_VIEW_ROW_COLUMNS:'Row columns',
	RECORD_VIEW_ROW_CREATE_MODAL_TITLE:'Add Row',
	RECORD_VIEW_ROW_MANAGE_MODAL_TITLE:'Manage Row',
	RECORD_VIEW_ROW_REMOVE:'remove row',
	RECORD_VIEW_SAVE_COPIED_MESSAGE:'The view was successfully copied',
	RECORD_VIEW_SAVE_SUCCESS_MESSAGE:'The view was successfully saved',
	RECORD_VIEW_SECTION_ADD:'add section here',
	RECORD_VIEW_SECTION_CREATE_MODAL_TITLE:'Create section',
	RECORD_VIEW_SECTION_MANAGE_MODAL_TITLE:'Manage section',
	RECORD_VIEW_SECTION_CSS_CLASS_DESCRIPTION:'no-labels, col-lg-3, padding-left-zero, padding-right-zero',
	RECORD_VIEW_SECTION_REMOVE:'remove section',
	RECORD_VIEW_SECTION_LABEL_VISIBILITY:'Label Visibility',
	RECORD_VIEW_SECTION_LABEL_VISIBILITY_CHECKBOX_LABEL:'show the section label',
	RECORD_VIEW_SECTION_COLLAPSED:'Section collapsed',
	RECORD_VIEW_SECTION_COLLAPSED_CHECKBOX_LABEL:'section will be collapsed as default',
	RECORD_VIEW_SECTION_TAB_ORDER:'Tab Order',
	RECORD_VIEW_SECTION_TAB_ORDER_LEFT_RIGHT:'Left to Right',
	RECORD_VIEW_SECTION_TAB_ORDER_TOP_DOWN:'Top to Down',
	RECORD_VIEW_TAB_ACTIONS: 'Actions',
	RECORD_VIEW_TAB_ACTIONS_SEVICE_CODE_MODAL_TITLE:'Manage Service Code',
	RECORD_VIEW_TAB_ACTIONS_SEVICE_CODE_MODAL_DESCRIPTION_PREFIX:'Leave <b>empty</b> for the default service to be loaded. If you want to customize it,',
	RECORD_VIEW_TAB_ACTIONS_SEVICE_CODE_MODAL_DESCRIPTION_SUFIX:'to prefill with the current default code.',
	RECORD_VIEW_TAB_ACTIONS_NAME_UNIQUE_DESCRIPTION:'should be unique for this view',
	RECORD_VIEW_TAB_ACTIONS_SERVICE_HEADING:'Service javascript',
	RECORD_VIEW_TAB_ACTIONS_SERVICE_DESCRIPTION:'Click the button below to review or manage the script that is used with the action templates.',
	RECORD_VIEW_TAB_ACTIONS_SERVICE_STATUS_DEFAULT: 'status: <span class="go-green">the default service code is loaded</span>',
	RECORD_VIEW_TAB_ACTIONS_SERVICE_STATUS_CUSTOM: 'status: <span class="go-orange">custom service code is loaded</span>',
	RECORD_VIEW_TAB_ACTIONS_TEMPLATES_HEADING:'Action templates',
	RECORD_VIEW_TAB_ACTIONS_TEMPLATES_HEADING_DESCRIPTION:'Here are defined what actions the user can perform with the view or its fields.',
	RECORD_VIEW_TAB_BASIC: 'Basic Attributes',
	RECORD_VIEW_TAB_DATA:'Sample data',
	RECORD_VIEW_TAB_MAIN_FORM: 'Main Form',
	RECORD_VIEW_TAB_SIDEBAR_FORM: 'Sidebar Forms',
	RECORD_VIEWS: 'Record Views',
	RECORDS_RELATION_STATUS_TOOLTIP: 'only when the origin and target entity is the same in a relation, you can manage the direction',
	RECORDS_RELATION_STATUS_ORIGIN_NOT_TARGET: 'origin ! = target',
	RECORDS_RELATION_STATUS_ORIGIN_TO_TARGET: 'origin > target',
	RECORDS_RELATION_STATUS_ORIGIN_FROM_TARGET: '<span class="go-red">target</span> > origin',
	RED: 'Red',
	RELATION: 'Relation',
	RELATION_CREATE: 'Create relation',
	RELATION_CREATE_MODAL_TITLE: 'Create new relation',
	RELATION_DELETE: 'Delete relation',
	RELATION_DELETE_MODAL_TITLE: 'Delete relation',
	RELATION_DELETE_MODAL_QUESTION: 'Are you sure that you need this relation deleted?',
	RELATION_DELETE_MODAL_INFO: 'By deleting the <b>{{name}}</b> relation you will also <b>loose any data it is providing to the entities</b>?',
	RELATION_ID: 'Relation ID',
	RELATION_LABEL_PLACEHOLDER: 'e.g. Category 1:N Item',	
	RELATION_MANAGE_MODAL_TITLE: 'Manage relation',
	RELATION_MANAGE_MODAL_WARNING:'only "Identifier GUID" fields can be related. Origin fields should be unique and required also. A field can be target to only one relation.<br />The relations - "1:1" and "1:N", do not allow the "id" to be Target field for the relation',
	RELATION_NAME: 'Relation Name',
	RELATION_NAME_PLACEHOLDER: 'e.g. category_1_n_item',
	RELATION_ORIGIN_ENTITY: 'Origin Entity',
	RELATION_ORIGIN_FIELD: 'Origin Field',
	RELATION_SAVE: 'Save relation',
	RELATION_TARGET_ENTITY: 'Target Entity',
	RELATION_TARGET_FIELD: 'Target Field',
	RELATION_TYPE: 'Relation type',
	RELATIONS: 'Relations',
	RELATIONS_EMPTY_MESSAGE: 'This entity does not have any existing relations yet!',
	REMOVE: 'Remove',
	RENDER: 'Render',
	RENDER_CHECKBOX_LABEL: 'Render this section',
	REQUIRED: 'Required',
	REQUIRED_CHECKBOX_LABEL: 'this is a required field',
	REQUIRED_FIELDS_MISSING: 'Required fields are missing data',
	ROLE_CREATE_MODAL_TITLE:'Create new role',
	ROLE_DELETE: 'Delete Role',
	ROLE_MANAGE_MODAL_TITLE:'Edit role <span class="go-green">{{name}}</span>',	
	ROLE_NAME: 'Role name',
	ROLE_SAVE_SUCCESS_MESSAGE: 'The role was successfully saved',
	ROLES: 'Roles',
	ROLES_PAGE_TITLE: 'User Roles',
	SAVE: 'Save',
	SELECT: 'Select',
	SEARCHABLE: 'Searchable',
	SEARCHABLE_FIELD_CHECKBOX_LABEL: 'the values of this field should be included in the search index',
	SETTINGS:'Settings',
	SORT:'Sort',
	SORT_ASCENDING:'sort from low to high by',
	SORT_DESCENDING:'sort from high to low by',
	SORT_RULE_ADD:'Add new sort',
	SORT_RULE_DESCRIPTION:'As sort value you need to type a field name or a data link JSON object',
	STARTING_NUMBER: 'Starting number',	
	STATISTICS_ABBR: 'Stats',
	SUCCESS_MESSAGE_LABEL: '<span class="go-green">Success:</span>',
	SYSTEM: 'System',
	SYSTEM_ENTITY_CHECKBOX_LABEL: 'this is a system entity. Deletion is locked',
	SYSTEM_FIELD_CHECKBOX_LABEL: 'this is a system field. Deletion is locked',
	SYSTEM_RELATATION_CHECKBOX_LABEL: 'this is a system relation. Deletion is locked',
	TARGET: 'Target',
	TEAL: 'Teal',
	TEMPLATE: 'Template',
	TEXTAREA_PLACEHOLDER:'e.g. some text',
	TRUE: 'True',
	TYPE: 'Type',
	UPDATE: 'Update',
	UNIQUE: 'Unique',
	UNIQUE_CHECKBOX_LABEL: 'all values of the field should be unique',
	UNKNOWN: 'Unknown',
	URL: 'URL',
	URL_LINK_TARGET: 'Link target',
	URL_LINK_TARGET_CHECKBOX_LABEL: 'open the link in a new window/tab',
	USER_EMAIL: 'User Email',
	USERNAME: 'Username',
	USERS: 'Users',
	USERS_PAGE_TITLE: 'System Users',
	USER_CREATE_MODAL_TITLE:'Create new user',
	USER_MANAGE_MODAL_TITLE:'Edit user <span class="go-green">{{email}}</span>',	
	VALIDATION_DATE_STRING: 'this string is not a valid date format',
	VALIDATION_DECIMAL: 'should be a valid decimal',
	VALIDATION_DECIMAL_NO_COMMA: 'Decimal, no comma allowed',
	VALIDATION_EMAIL: 'Invalid email',
	VALIDATION_ENTITY_NOT_FOUND: 'could not get the related entity meta',
	VALIDATION_GUID: 'should be a valid GUID',
	VALIDATION_INTEGER_OR_DECIMAL_2_PLACES: 'should be a positive integer or decimal number, with two decimal places after the dot',
	VALIDATION_LESS_EQUAL_THAN_VALUE: 'Should be < = {{digit}}',
	VALIDATION_LESS_THAN_50_CHARS: 'must be less than 50 chars',
	VALIDATION_MULTISELECT_OPTION_SET_DEFAULT: 'You need to fill in value or label first',
	VALIDATION_MORE_EQUAL_THAN_VALUE: 'Should be > = {{digit}}',
	VALIDATION_ONLY_ALPHANUMERIC_AND_UNDERSCODE: 'only lowercase alphanumeric characters or underscore, must start with a letter, at least two chars',
	VALIDATION_POSITIVE_INTEGER: 'should be a positive integer',
	VALIDATION_REQUIRED_FIELD: 'required field',
	VALIDATION_RELATION_NOT_FOUND: 'item relation not found',
	VALIDATION_RELATION_TARGET_CANNOT_ID: 'The Id cannot be a target field, when the relation type is "One to one" or "One to many"',
	VALIDATION_RELATION_TARGET_ORIGIN_FIELD_MATCH: 'Target and Origin fields cannot match',
	VALIDATION_STRING_TOO_LONG: 'Too long: must be < = {{digit}} chars.',
	VALIDATION_TREE_SELECT_FIELD_NO_TREES_DEFINED: 'There are other entities with proper relations, but they do not have existing trees defined',
	VALIDATION_TREE_SELECT_FIELD_NO_1_N_RELATION: 'There are no other entities that has 1:N or N:N relation with the current entity being a target',
	VALUE: 'Value',
	VERIFIED:'Verified',
	VERIFIED_CHECKBOX_LABEL:'verified',
	VERSION:'Version',
	VIEWS_COUNT: '# views',
	VIEW_DETAILS:'View details',
	WEIGHT: 'Weight',
	WEIGHT_ABBR: 'w.',
	WEIGHT_PLACEHOLDER: 'e.g. 2',
	YELLOW: 'Yellow',
};



