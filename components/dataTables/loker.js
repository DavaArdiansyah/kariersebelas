$('#tableLoker').DataTable({
    order: [1, 'asc'],
    responsive: {
        details: {
            type: 'column',
            target: 'tr'
        }
    },
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
            targets: [1, 2] //target kolom index 1, 2
        },
        {
            className: 'lkrr-control',
            orderable: false,
            target: 0
        }
    ]
});