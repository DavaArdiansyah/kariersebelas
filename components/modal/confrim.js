const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
  }
});

const modalKonfirmasi = () => {
    Swal.fire({
      title: "Apakah Anda Yakin Untuk Melamar Pekerjaan Ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yakin",
      cancelButtonText: "Batal"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          html: '<p>Apakah Anda Ingin Mengupload File Tambahan Seperti CV Anda? Jika Tidak Kami Hanya Akan Mengirimkan Data Anda Yang Ada Pada Bagian Profil</p><input type="file" class="filepond" name="file" id="file" />'
        });
      }
    });
  }

  const modalKonfirmasiDiterima = () => {
    Swal.fire({
        title: "Success!",
        text: "Anda Berhasil Menerima Lamaran!",
        icon: "success"
      });
}
const modalKonfirmasiDitolak = () => {
    Swal.fire({
        title: "Success!",
        text: "Anda Berhasil Menolak Lamaran!",
        icon: "success"
      });
}

const modalKonfirmasiDelete = () => {
  Swal.fire({
    title: "Apakah Anda Yakin Untuk Menghapus Ini?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yakin",
    cancelButtonText: "Batal"
  }).then((result) => {
    if (result.isConfirmed) {
      // Toast.fire({
      //   title: "Anda Berhasil Menghapus!",
      //   icon: "success"
      // });
    }
  });
}