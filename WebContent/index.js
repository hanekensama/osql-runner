/**
 * 
 */

let table_header = ['列1', '列2', '列3'];
let table_data = [
	['データ01', 'データ02', 'データ03'],
	['データ11', 'データ12', 'データ13'],
	['データ21', 'データ22', 'データ23'],
	['データ31', 'データ32', 'データ33'],
	['データ41', 'データ42', 'データ43'],
	['データ51', 'データ52', 'データ53']];	

const show_table = () => {
	let data = '<div class="table-responsive">';
	data += '<table id="result-table" class="table thead-light table-hover table-bordered table-sm">\n';
	
	data += '<tr>';
	data += '<th>#</th>';
	for (let i in table_header) {
		data += '<th>' + table_header[i] + '</th>';
	}
	data += '</tr>';

	for (let i in table_data) {
		data += '<tr>';
		data += '<td>' + i + '</td>';
		for (let j in table_data[i]) {
			data += '<td>' + table_data[i][j] + '</td>';
		}
		data += '</tr>';
	}
	data += '</table>';
	data += '</div>';
	
	$('#result-view').html(data);
	$('#result-table').resizableColumns({
		store:window.store
	});
}

$(function() {
	$('#editor-button-execute').click(show_table);
	
	$(window).keydown(function(e) {
		if (event.ctrlKey) {
			if (e.keyCode == 13) {
				show_table();
				return false;
			}
		}
	})
});