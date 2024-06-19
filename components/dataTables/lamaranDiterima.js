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
                layout: 'columns-3', //kolom untuk filter
                orderable: false, //non aktif noise filter
                initCollapsed: true, //non aktif filter dropdown
            }
        },
    },
    columnDefs: [{
            searchPanes: {
                show: true //filter show true
            },
            targets: [2, 3, 4] //target kolom index 2, 3, 4
        },
        {
            className: 'dtr-control',
            orderable: false,
            target: 0
        },
        {
            searchPanes: {
                show: false,
            },
            targets: [1] // apacoba
        }
    ]
});