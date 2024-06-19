$('#tableAlumni').DataTable({
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
        targets: [2, 3] //target kolom index 2, 3 dan 4
    }]
});
