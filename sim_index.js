



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