$('#tableAlumni').DataTable({
    order: [2, 'asc'],
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
                // panes: [{ //menambahkan kondisi baru untuk filter
                //     name: 'Status User',
                //     header: 'Status User',
                //     options: [{
                //             label: 'Belum Bergabung',
                //             value: function(rowData) {
                //                 return rowData[5] === 'Belum Bergabung';
                //             }
                //         },
                //         {
                //             label: 'Sudah Bergabung',
                //             value: function(rowData) {
                //                 return rowData[5] !== 'Belum Bergabung';
                //             }
                //         }
                //     ]
                // }]
            }
        }
    },
    columnDefs: [{
            searchPanes: {
                show: true //filter show true
            },
            targets: [2, 3], //target kolom index 2 dan 3
        },
        {
            className: 'dtr-control',
            orderable: false,
            target: 0
        }
    ],
});