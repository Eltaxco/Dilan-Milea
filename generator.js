function generateLink(){

    const domain =
    "https://domainanda.com/";

    const input =
    document.getElementById("namaList").value;

    const namaArray =
    input.split("\n");

    const hasil =
    document.getElementById("hasil");

    hasil.innerHTML = "";

    namaArray.forEach(nama => {

        nama = nama.trim();

        if(nama !== ""){

            const link =
            domain +
            "?to=" +
            encodeURIComponent(nama);

            hasil.innerHTML += `
            <div class="item">
                <strong>${nama}</strong>
                <br>
                <input
                value="${link}"
                readonly
                style="width:100%;padding:8px;">
            </div>
            `;
        }

    });

}
function copyLink(link){

    navigator.clipboard.writeText(link);

    alert("Link berhasil disalin");

}