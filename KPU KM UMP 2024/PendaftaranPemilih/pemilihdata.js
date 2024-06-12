function submitForm() {
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    
    const data = {
        name: formData.get('name'),
        nim: formData.get('nim'),
        prodi: formData.get('prodi'),
        fakultas: formData.get('fakultas'),
        whatsapp: formData.get('whatsapp'),
        ktm: formData.get('ktm').name,
        photo: formData.get('photo').name
    };

    console.log('Form Data Submitted:', data);

    alert('Pendaftaran berhasil!');

    form.reset();
}

function Cekstatus(page) {
    window.location.href = page;
}