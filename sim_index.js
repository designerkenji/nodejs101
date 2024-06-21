



var server= app.listen(app.get('port'), function () {
	console.log('Simulator App listening on port:', app.get('port'))
}

server.timeout = 30000000;

const ssloptions = {
	pfx: fs.readFileSync('keys/pfx.pfx'),
	passphrase: 'Work4'
};

var httpsServer = https.createServer(ssloptions, app);

httpsServer.listen(443, function () {
	console.log('Simulator App listening https on port:', app.get('port'))
}
);




sql.getPlainContext("connectionName")
.step("readData", function(execute, data) {
	execute({
		procedure: "DBO.SP_",
		params: {
			username: {
				type: sql.NVARCHAR,
				val: visitor_windows_id
			},
			email: {
				type: sql.NVARCHAR,
				val: req.body.email 
			},
			passwordHas: {
				type: sql.NVARCHAR,
				val: hasher.computeHash("psw", salt)
			},
			salt: {
				type: sql.NVARCHAR,
				val: salt
			}
		}
	})
	
})
.end( function(sets) {
	console.log("got results from SP_");
	
	// res.send(sets.readData[0][0]);
	
	var response_from_database = sets.readData[0].returnValue;
	if (response_from_database == 1) {
		res.render("ejs_template_name_without_dot_ejs", {
			variable2ejs: "some text",
			variable2: ""
		});
	} else {
		res.render("ejs2", {
			
		});
	}
})
.error( function(err) {
	console.log("Something bad happened: ", err);
	
	// res.end();
});


var auth = require("../auth");
var formidable = require("formidable");
var fs = require("fs");
var csv = require("csv-express");
var Entities = require("html-entities").XmlEntities;
entities = new entities();

var visitor_request_domain;
var visitor_request_lanid;
var visitor_request_ip;
visitor_request_domain = "";
visitor_request_lanid="";
visitor_request_ip="";
var nodemailer = require("nodemailer");
var pptx = require("pptxgenjs");
var when = require("when");

app.get('/path', auth.ensureAuthenticated, function (req, res) {
	if (!req.connection.user) {
		console.log();
		var visitor_request_lanid = "anonymous";
	} else {
		var visitor_request_lanid = req.connection.user;
	}
	
	// .userGroups
	// .URL
	
	console.log(visitor_request_lanid, " at path");
	res.render("ejs_template_name_without_dot_ejs", {
		variable2ejs: "some text",
		variable2: "",
		visitor_request_lanid: visitor_request_lanid,
		visitor_request_filterID: 0
	});
		
})






@APP_NM varchar(255)

DECLARE @StartTime datetime
DECLARE @EndTime datetime 
select @StartTIme=GETDATE()


T_USER_ACTIVITY (
USER_NM,
DOMAIN,
REMOTE_ADDR,
USER_ACTION,
TABLE_NM,
SP_NM
)
VALUES (
@
cast(@ID as varchar(255))
)

select @user=user from table WITH (NOLOCK)

SET @FIRST_NM = case when @FIRST_NM is null then '' else @FIRST_NM end



DECLARE @FILTER_ITEM_CURSOR_FILTER_FIELD_NAME NVARCHAR(MAX)
DECLARE @FILTER_ITEM_CURSOR_FILTER_FIELD_DISPLAY_NAME NVARCHAR(MAX)
DECLARE @FILTER_ITEM_CURSOR_FILTER_FIELD_DATA_TYPE NVARCHAR(MAX)

DECLARE @sql nvarhcar(MAX)
set @sql = ' SELECT @VAR = count(*) from table'

DECLARE @UNDERLYING_DATA as nvarchar(MAX)

EXEC DBO.SP 
@FilterID = @FilterID
@return_list = @UNDERLYING_DATA OUTPUT

SET @sql = @sql + @UNDERLYING_DATA

SET @sql = @sql + ') a'

INSET INTO DBO.T_APP_SQL (

SP_NM, SQL 
) VALUES (

)

EXEC SP_EXECUTESQL 
@Query = @sql 
,@Params = N'@var INT OUTPUT, '
,@var = @var OUTPUT 



DECLARE @p_body as nvarchar(max)
DECLARE @p_subject as nvarchar(max)
DECLARE @p_recipients as nvarhcar(max), @p_copy_recipients as nvarhcar(max)
,@blind_copy_recipients as nvarchar(max), @p_profile_name as nvarhcar(max), @p_reply_to as nvarhcar(max) 

DECLARE @emailModalFrom nvarhcar(255)
SET @emailModalFrom="emailaddress@"

if @emailModalFrom=''
begin
SET @p_profile_name = N'SQLSERVER_MAIL_PROFILE_ana'
SET @p_reply_to = N''
end



DECLARE @p_body_summary as nvarchar(max)
set @p_body_summary='<body bgcolor="@FFFFFF" topmargin="0" leftmargin="0" marginheight="0" marginwidth="0" style="font-family: Arial, sans-serif; font-size: 10pt;">'
set @p_body_summary=@p_body_summary+@first_nm + 'filtered ' + cast(@numOfItems as varchar(255))

case when @GPW is null then 'no' else '$'+
reverse(substring(reverse(convert(varchar(50), CAST(case when @GPW is null then 0 ense round(@GWP,0) end as money), -1)), 4, 50))
end

set @p_body_summary=@p_body_summary+'<br>'

set @p_body_summary=@p_body_summary+N'<a href="http://">link</a>'

set @p_body_summary=@p_body_summary+N'</body>'

INSET INTO dbo.T_EMAIL_MSG 

EXEC msdb.dbo.sp_send_dbmail 
@profile_name = @p_profile_name,
@reply_to = @p_reply_to,
@recipients = @p_recipients,
@body = @p_body_summary,
@body_format = 'HTML',
@subject = @p_subject 



.templates = {
	interpolate: /\{\{=(.+?)\}\}/g,
	evaluate: /\{\{(.+?)\}\}/g,
	
};


function underscore_sum(numbers) {
	return _.reduce(numbers, function (result, current) {
		return result + parseFloat(current);
	}, 0);
	
	
};

function underscore_count(numbers) {
	return _.reduce(numbers, function (result, current) {
		return result +1;
	}, 0);
	
	
};

function underscore_first(numbers) {
	return _.reduce(numbers, function (result, current) {
		return result;
	}, 0);
};

function kFormatter(num) {
	if (num >= 1000000000 && num < 1000000000000) {
		return (num / 1000000000).toFixed(1) + 'B';
	} else if (num >= 1000000 && num < 1000000000) {
		return (num / 1000000).toFixed(1) + 'M';
	} else if (num >= 1000 && num < 1000000) {
		return (num / 1000).toFixed(1) + 'K';
	} else if (num > -1000 && num < 1000) {
		return (num / 1).toFixed(1);
	} else if (num <= -1000 && num > -1000000) {
		return (num / 1000).toFixed(1) + 'K';
	} else if (num <= -1000000 && num > -1000000000) {
		return (num / 1000000).toFixed(1) + 'M';
	} else if (num <= -1000000000 && num > -1000000000000) {
		return (num / 1000000000).toFixed(1) + 'B';
	} else {
		return kendo.toString(num, "n0");
	}
	
}



function limitFormatter(num) {
	if (num > 999999999 && num < 1000000000000) {
		return (num / 1000000000).toFixed(1) + 'B';
	} else if (num > 999999 && num < 1000000000) {
		return (num / 1000000).toFixed(1) + 'M';
	} else if (num > 999 && num < 1000000) {
		return (num / 1000).toFixed(1) + 'K';
	} else if (num < 999) {
		return num;
	} else {
		return num;
	}
	
}

function pctFormatter(num) {
	var pct = (num * 100).toFixed(1) + '%';
	return pct;
	
}

function show_p2_or_NA(value) {
	if (value) {
		return kendo.toString(value, "p0")
	} else {
		if (value ==0) {
			return kendo.toString(value, "p0")
		} else {
			return 'NA'
		}
	}
}

function show_kmb_or_NA(value) {
	if (value) {
		return '$'+kFormatter(value)
	} else {
		 
		return 'NA'

	}
}


function show_kmb_or_NA_for_numeric(value) {
	if (value) {
		return kFormatter(value)
	} else {
		 
		return 'NA'

	}
}


function pFormatter(value) {
	if (value) {
		return kFormatter(value)
	} else {
		 
		return ''

	}
}


function javascript_escape_single_quote(value) {
	var str = value;
	var res = str.replace("\'", "\\\'");
	
	return res
}




function formatFileSize(value) {
	if (value >= 1073741824) {
		return (Math.round(value / 1073741824 *100) / 100 + "TB";
	} else if (value >= 1048576) {
		return (Math.round(value / 1048576 *100) / 100 + "MB";
	} else if (value >= 1024) {
		return (Math.round(value / 1024) + "KB";
	} else {
		return value + 'B';
	}
	
}

function pad_zero_on_left(number, length) {
	var my_string = ''+ number;
	while (my_string < length) {
		my_string = '0' + my_string;
	}
	
	return my_string;
}

function save_user_preference (ATTRIBUTE_DS, ATTRIBUTE_VAL_DS, PORTLET_NM) {
	
	var APP_NM = $('@visitor_request_APP_NM').val();
	
	var API = "api";
	$.getJSON(API, {
		ATTRIBUTE_DS: ATTRIBUTE_DS,
		ATTRIBUTE_VAL_DS: ATTRIBUTE_VAL_DS,
		APP_NM: APP_NM,
		PORTLET_NM: PORTLET_NM
	})
	.done(function (data) {
		// $('#data_refresh_msg').text('');
		// $('#data_refresh_msg').text(data[0].DATA_REFRESH);
	}); 
	
}




$(document).ready(functgion () {
	$.ajaxSetup({
		cache: false
	});
});

function page_init() {
	
	go.licenseKey = '';
	
}




$(document).ready(functgion () {
	$.ajaxSetup({
		cache: false
	});
	
	$("#app_search_Modal").on('shown.bs.modal', function() {
		$('#app_search_Modal_Alert').html('');
		$('#app_search_Modal_Alert').hide();
		$('#app_search_Modal_Alert').select();
	})
	
	$("#app_search_Modal").on('hidden.bs.modal', function() {
		load_filter_selected_items();
	})
	
	$("#app_search_Modal_searchbox").autocomplete({source: function () {
		$('#amazing_search_clear_button').show();
		amazing_search_for_anything();
	}});
	
	// Enter key
	// if (event.keyCode ===13) {
		
		
	// }
	
	
});



if (data.length==0) {
	request_this_to_be_searchable();
	
} else {
	
	if (data[0].results==0) {
		request_this_to_be_searchable();
	
	} else {
		
		amazing_search_for_anything_refresh_search_suggestion_table(data);
		$("#app_search_Modal_search_results").show();
	}
}


function amazing_search_for_anything_refresh_search_suggestion_table(data) {
	var result = [];
	var renderRow = _.template($('#app_search_Modal_search_results-template').html());
	_.each(data, function (value, key) {
		result.push(renderRow(value));
	});
	
	$('#app_search_Modal_search_results-template').html(result);
	
}


function refresh_filter_history(data) {
	var full_list_of_data = data;
	var _Filter_list = _.chain(data)
	.groupBy("FilterID")
	.map(function (value, key) {
		return {
			FilterID: key, 
			date_created_how_long_ago: underscore_first(_.pluck(value, "date_created_how_long_ago"))
		}
	})
	.sortBy("FilterID")
	.reverse();
	.value();
	
	
	var result = [];
	var resultSub = [];
	
	var renderSub = _.template($('#filter_history_table_sub_template-template').html());
	var renderMain = _.template($('#filter_history_table_main_template-template').html());
	
	_.each(Filter_list, function (value, key) {
		var resultSub = [];
		var selectedRows = _.where(full_list_of_data, {'FilterID': Number(value.FilterID)});
			_.each(selectedRows, function (value, key) {
				resultSub.push(renderSub(value));
			});
			
		value.FilterItemList = resultSub; 
		result.push(renderMain(value));
	});
	
	$('#filter_history_table_tbody').html(result);
	
	
	
	
}


function filter_history_Modal_filter_clicked(filterID) {
	$('#visitor_request_filterID').val(filterID);
	load_filter_selected_items();
	$('#filter_history_Modal').modal('hide');
	
}


function refresh_WC_batchlist_data_dictionary_grid(data) {
	var RecordFieldDS = new kendo.data.DataSource({
		data: data, 
		pageSize: 10,
		sort: {
			
		},
		schema: {
			model: {
				fields: {
					
				}
			}
		}
	}
	
	
	);
	
	
	var grid = $("#WCBatchList_data_dictionary_grid").data("kendoGrid");
	
	if(grid) {
		
		$("#WCBatchList_data_dictionary_grid").data("kendoGrid").setDataSource(RecordFieldDS);
	} else {
		
		var RecordField_grid = $("#WCBatchList_data_dictionary_grid").kendoGrid({
			
			dataSource: {
				data: data, 
				pageSize: 10,
				schema: {
					model: {
						fields: {
							EXP_INCEPT_DT: {type: "date"},
							GWP: {type: "number"},
							
						}
					}
				}
				
			},
			
			navigatable: true, 
			pageable: {
				
				refresh: false,
				pageSizes: true,
				buttonCount: 10
			},
			sortable: true,
			resizable: true, 
			filtereable: {
				
				mode: "menu",
				operators: {
					string: {
						contains: "Contains",
						doesnotcontain: "Doesn't contain",
						startswith: "Starts With",
						doesnotstartwith: "Does not start",
						eq: "Is Equal to",
						neg: "Not equal to",
						isnull: "Null or Missing",
						isnotnull: "Not null",
						isempty: "Empty",
						isnotempty: "Not empty",
						endswith: "Ends",
						doesnotendwith: "Does not end"
					},
					number: {
						gte: "Greater than or equal to",
						lte: "less than or equal to",
						isnull: "Null or missing",
						isnotnull: "Not null",
						eq: "Equal to",
						neq: "Not equal to"
					},
					date: {
						gt: "After",
						lt: "Before",
						eq: "Is Equal To",
						neg: "Not eual to",
						gte: "After or equal to",
						lte: "Before or equal to",
						isnull: "Null or missing",
						isnotnull: "Not null",
						
						
					}
				}
			},
			
			columnMenu: true, 
			
			columns: [
			{
				fields: "FieldName", 
				title: "Field Name",
				attributes: { "style": "text-align: left"},
				headerAttributes: {
					"class": "table-header-cell",
					"style": "background-color:#e3e4e6;"
				},
				width: "200px"
				,filterable: {cell: {
					operator: "contains",
					suggestionOperator: "contains"
				},
				multi: true,
				search: true 
				}
				
				
			},
			
			{
				fields: "DetailedDescription", 
				title: "Field Description", 
				attributes: {"style": "text-align: left"},
				headerAttributes: {
					"class": "table-header-cell",
					"style": "background-color:#e3e4e6;"
				},
				width: "600px"
			}
			
			
			]
		}).data("kendoGrid");
	}
	
}



<script id="some-template" type="text/template">

<tr>
<td style="text-align: left; width:150px;"><b>BUCKET</b></td>

{{=FIELD_NM}}
</tr>

</script>




DECLARE @NumOfItems int 
SELECT @NumOfItems=count(*) FROM T_USER_FILTER_ITEM_SELECTED WITH (NOLOCK)
WHERE FILTERID=@FILTERID 

DECLARE @FILTER_ITEM_CURSOR_FILTER_FIELD_NAME NVARCHAR(MAX)
DECLARE @FILTER_ITEM_CURSOR_FILTER_FIELD_DISPLAY_NAME NVARHCAR(MAX)
DECLARE @FILTER_ITEM_CURSOR_FILTER_FIELD_DATE_TYPE NVARHCAR(MAX)

DECLARE @EXPIRING_RECORD_COUNT INT 

DECLARE @MIN_EXP_EXPIRY_DT NVARCHAR(MAX)

DECLARE @SQL NVARCHAR(MAX)
SET @SQL = '
SELECT @EXPIRING_RECORD_COUNT= COUNT(*)
,@MIN_EXP_EXPIRY_DT=CAST(YEAR(MIN(EXP_EXPIRY_DT)) AS NVARCHAR) +''-''+
RIGHT(''00'' + CAST(MONTH(MIN(EXP_EXPIRY_DT)) AS NVARCHAR),2)  +''-''+
RIGHT(''00'' + CAST(DAY(MIN(EXP_EXPIRY_DT)) AS NVARCHAR),2)

FROM (
'

DECLARE @SQL20 NVARCHAR(MAX)

SET @SQL1=SUBSTRING(@SQL,1,4000)
SET @SQL2=SUBSTRING(@SQL,4001,4000)
SET @SQL3=SUBSTRING(@SQL,8001,4000)
SET @SQL4=SUBSTRING(@SQL,12001,4000)
SET @SQL5=SUBSTRING(@SQL,16001,4000)
SET @SQL6=SUBSTRING(@SQL,20001,4000)
SET @SQL7=SUBSTRING(@SQL,24001,4000)
SET @SQL8=SUBSTRING(@SQL,28001,4000)
SET @SQL9=SUBSTRING(@SQL,32001,4000)
SET @SQL10=SUBSTRING(@SQL,36001,4000)
SET @SQL11=SUBSTRING(@SQL,40001,4000)
SET @SQL12=SUBSTRING(@SQL,44001,4000)
SET @SQL13=SUBSTRING(@SQL,48001,4000)
SET @SQL14=SUBSTRING(@SQL,52001,4000)
SET @SQL15=SUBSTRING(@SQL,56001,4000)
SET @SQL16=SUBSTRING(@SQL,60001,4000)
SET @SQL17=SUBSTRING(@SQL,64001,4000)
SET @SQL18=SUBSTRING(@SQL,68001,4000)
SET @SQL19=SUBSTRING(@SQL,72001,4000)
SET @SQL20=SUBSTRING(@SQL,76001,4000)
SET @SQL21=SUBSTRING(@SQL,80001,4000)
SET @SQL22=SUBSTRING(@SQL,84001,4000)


INSERT INTO T_APP_SQL

EXEC(@SQL1+
@SQL2+
@SQL3+
@SQL4+
@SQL5+
@SQL6+
@SQL7+
@SQL8+
@SQL9+
@SQL10+
@SQL11+
@SQL12+
@SQL13+
@SQL14+
@SQL15+
@SQL16+
@SQL17+
@SQL18+
@SQL19+
@SQL20+
@SQL21+
@SQL22
)



SELECT @DATASTEPSTARTTIME=GETDATE()
SET @ROWCOUNT=0

DROP TABLE F_ITEM_01

SET @ROWCOUNT = @@ROWCOUNT 

SELECT FILTER_PARENT_FIELD_VALUE, FILTER_FILED_VALUE,FILTER_FIELD_NAME,
FILTER_FIELD_DISPLAY_NAME, @TRANSACTION_SK AS SS_TRANSACTION_SK
INTO F_ITEM_01
FROM (

SELECT DISTINCT 'ALL' AS FILTER_PARENT_FIELD_VALUE, F1 AS FILTER_FIELD_VALUE, 'F1' AS FILTER_FIELD_NAME ,
UNION ALL 

) A



SELECT top 20 FILTER_ITEM_ID
,FILTER_FIELD_VALUE_COUNT 
,FILTER_FIELD_DISPLAY_NM
,FILTER_FIELD_NM
,FILTER_FIELD_VALUE 
,CASE WHEN FILTER_FIELD_VALUE is null then '' else FILTER_FIELD_VALUE end 
+' [FIELD_NM].['+FILTER_FIELD_NM+']' as FILTER_FIELD_VALUE2
,FILTER_PARENT_FIELD_VALUE 

FROM F_ITEM_LK

WHERE FILTER_FIELD_NM +' ' FILTER_FIELD_DISPLAY_NM+' '+ FILTER_FIELD_VALUE 
+' '+
replace(
replace(
replace(FILTER_FIELD_VALUE, '.', '')
,'-','')
,'''','')
+' ' +
replace(
replace(
replace(
replace(FILTER_FIELD_VALUE,'.','')
,'-','')
,'''','')
,' ','')
+' '+FILTER_FIELD_DISPLAY_NM 
like '%'+@search_for+'%'
order by FILTER_FIELD_VALUE_COUNT, FILTER_FIELD_NM,FILTER_FIELD_VALUE 


SET @ENDPATINDEX=PATINDEX('%[^a-z]visited[^a-z]%', @USER_INPUT_DS)

IF @ENDPATINDEX=0
begin 
	set @ENDPATINDEX=99999
end 
SET @ENTITY_NM = ltrim(rtrim(substring(@USER_INPUT_DS, @PATINDEX+len(' how many people in '), @ENDPATINDEX)))




MultiQueryTransaction().then( function(member) {
	
	
	
}

)








var nodemailer = require('nodemailer');
var pptx = require('pptxgenjs');
var Excel = require('exceljs');
var when = require('when');

var _ = require('underscore');


function getTimestamp() {
	var dateNow = new Date();
	var dateMM = dateNow.getMonth() + 1; dateDD = dateNow.getDate(); dateYY = dateNow.getFullYear(); h = dateNow.getHours(); m = dateNow.getMinuites();
	return dateNow.getFullYear() + ''+ (dateMM<9 ? '0' + dateMM : dateMM) +''+ (dateDD<=9 ? '0' + dateDD : dateDD) + (h<=9 ? '0' + h: h) + (m<=9 ? '0' + m:m);	
}

var exportfilename = 'Mars_'+getTimestamp()+'.xlsx';


var MultiQueryTransaction = function (firstName, lastName, emailAddress, twitter) {
	return when.premise ( function (resolve, reject) {
		
		sql.getTransactionContect("sql2024")
			.step("newFileName", {
				procedure: "SP",
				params: {
				username: { type: sql.NVARCHAR, val: visitor_request_lanid },
				domain: { type: sql.NVARCHAR, val: visitor_request_domain },
				remote_addr: { type: sql.NVARCHAR, val: visitor_request_ip },
				file_name: { type: sql.NVARCHAR, val: exportfilename },
				file_type: { type: sql.NVARCHAR, val: '' },
				file_size: { type: sql.NVARCHAR, val: 0 },
				}
			}
			)
			.step("save_new_filename", function(execute, data){
				var newFileName = data.newFileName[0][0][0].newFileName;
				console.log("newFileName:"+newFileName);
				execute( {
					procedure: "SP",
					params: {
						
					}
				})
				
			})
			.end( function (result) {
				console.log("Filtered data finish");
				result.transaction  
				.commit() 
				.then( function() {
					var member = [];
					member.newFileName = result.sets.newFileName[0][0][0].newFileName;
					member.mail_id = result.sets.newFileName[0][0][0].mail_id;
					member.first_name = result.sets.newFileName[0][0][0].first_name;
					member.Filtered_Data = result.sets.Filtered_Data[0][0];
					member.related_pol = result.sets.related_pol[0][0];
					
					resolve(member);
				}), function(err) {
					reject(err);
				};
				
			})
			.error(function(err) {
				reject(err);
			});
		
	})
	
	
}



MultiQueryTransaction().then( function(member) {
	

	
function unpack_labels(rows, key) {
	return rows.map(
		function(row) {
			return row[key];
		}
	)
};
	
function unpack(rows, key) {
	return rows.map(
		function(row) {
			return row[key];
		}
	)
};
	
	
function unpack_to_mm(rows, key) {
	return rows.map(
	function(row) {
		return ( text: Math.round(row[key]*1000000.0), options: { align: 'center', color: '000000', fill: 'f2f2f2'});
		
	}
	)
}

function unpack_to_pct(rows, key) {
	return rows.map(
	function(row) {
		return ( text: Math.round(row[key]*100.0)+'%', options: { align: 'center', color: '000000', fill: 'f2f2f2'});
		
	}
	)
}



var workbook = new Excel.Workbook();
workbook.creator = 'email@domain.com';
workbook.lastModifiedBy = 'email@domain.com';
workbook.created = new Date();
workbook.modified = new Date();

var sheet = workbook.addWorksheet('Data', {
	views: [{xSplit: 1, ySplit: 1}],
	properties: {tabColor: {argb: 'FFC0000'}}
});

sheet.columns = [
{header: 'POL', key: 'POL', width: 10},
];

var idCol = sheet.getColumn('thecolname_AM'); idCol.numFmt = '#,##0';



the_list_to_mgt=the_list_to_mgt+'<table style="border: 1px solid #f2f2f2; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 10pt; padding: 4px;"><tr>';
the_list_to_mgt=the_list_to_mgt+'<th style="vertical-align:top; text-align: right; border: 1px solid #f2f2f2;">Underwriter</th>';
the_list_to_mgt=the_list_to_mgt+'</tr>';

var i;
for (i=0; i < member.Filtered_data.length; i++) {
	the_list_to_mgt=the_list_to_mgt+'<tr>';
	the_list_to_mgt=the_list_to_mgt+'<td style="vertical-align:top; text-align: right; border: 1px solid #f2f2f2;">Underwriter</td>';

	the_list_to_mgt=the_list_to_mgt+'</tr>';
}

the_list_to_mgt=the_list_to_mgt+'</table>';

var emailBody = emailBody.replace("[POL_LIST]", the_list_to_mgt);

var exportfilepath = path.join(appRoot, '/pptx', member.newFileName);

workbook.xlsx.writeFile(exportfilepath)
	.then(function () {
		
		let smtpConfig = {
			port: 25,
			host: 'replay.domain.com',
			secure: false, 
			auth: {
				user: "user@domain.com",
				pass: ""
			},
			tls: (rejectUnauthorized: false),
			debug: true
		};
		
		let transporter = nodemailer.createTransport(smtpConfig);
		
		if (req.query.emailModalSubject == '') {
			var newsLetterFilePath = path.join(appRoot, '/static/help', 'filename.pdf');
			
			var mailOptions = {
				from: req.query.emailModalFrom,
				to: email_to,
				cc: req.query.emailModalcopy_recipients,
				subject: req.query.emailModalSubject,
				html: emailBody ,
				attachments: [
				{
					filename: 'filename.pdf',
					path: newsLetterFilePath
				}]
			};
			
		}
		
		
		
		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.log(error);
				
			} else {
				console.log('Email sent: ' + info.response);
			}
			
		});
		
		
		var result=[];
		result.push({filename: member.Filered_Data.length});
		res.send(result);
		
		
		
	});
	
	
	
		
}  belongs to MultiQueryTransaction().then( function(member) {

) belongs to MultiQueryTransaction().then( function(member) {
	
	
	
	
	