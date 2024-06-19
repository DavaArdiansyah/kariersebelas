FilePond.registerPlugin(FilePondPluginFileValidateType); //menambahkan validasi tipe file untuk import
      const options = {
        acceptedFileTypes: [
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        ],
        server: {
          process: "/admin/alumni/import",
          headers: {
            "X-CSRF-TOKEN": "kKa6ZBH4KjNqY3z98ZtO2uHdIrrk1jYGm2RynVIN",
          },
        },
      };

      const inputElement = document.querySelector(".filepond");
      const pond = FilePond.create(inputElement, options);