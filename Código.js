function removeDuplicatesBD_Dfs_Geral_OK() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BD_Dfs_Geral_OK');
  var data = sheet.getDataRange().getValues();
  var ids = data.map(function(row){ return row[0]; }); // IDs estão na primeira coluna
  var uniqueIds = [];
  var rowsToDelete = [];

  // Identifica os IDs duplicados e as linhas a serem deletadas
  for (var i = ids.length - 1; i >= 0; i--) {
    if (uniqueIds.indexOf(ids[i]) == -1) {
      uniqueIds.push(ids[i]);
    } else {
      rowsToDelete.push(i + 1); // Adiciona 1 porque as linhas nas planilhas começam em 1, não 0
    }
  }

  // Deleta as linhas identificadas, de baixo para cima para evitar problemas de indexação
  for (var j = 0; j < rowsToDelete.length; j++) {
    sheet.deleteRow(rowsToDelete[j]);
  }
}

function removeDuplicatesBD_Dfs_Geral_Servico_Extra() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('BD_Dfs_Geral_Serviço_Extra');
  var data = sheet.getDataRange().getValues();
  var ids = data.map(function(row){ return row[0]; }); 
  var uniqueIds = [];
  var rowsToDelete = [];



  for (var i = ids.length - 1; i >= 0; i--) {
    if (uniqueIds.indexOf(ids[i]) == -1) {
      uniqueIds.push(ids[i]);
    } else {
      rowsToDelete.push(i + 1); // Adiciona 1 porque as linhas nas planilhas começam em 1, não 0
    }
  }

  // Deleta as linhas identificadas, de baixo para cima para evitar problemas de indexação
  for (var j = 0; j < rowsToDelete.length; j++) {
    sheet.deleteRow(rowsToDelete[j]);
  }
}