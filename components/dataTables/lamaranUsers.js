$('#tableLamaran').DataTable({
    responsive: true,
    layout: {
        top1: {
            searchPanes: { //filter layout
                orderable: false, //non aktif noise filter 
                initCollapsed: true, //non aktif filter dropdown
            }
        },
    },
    columnDefs: [{
        searchPanes: {
            show: true //filter show true
        },
        targets: [0, 1, 2, 3] //target kolom index 0, 1, 2
    }]
});