import Swal from "sweetalert2";
export const triggerSwal = (message) => {
  Swal.fire({
    html: message,
    timer: 2500,
    timerProgressBar: true,
    position: "center",
    icon: "error",
    didOpen: () => {
      Swal.showLoading();
    },
  });
};
