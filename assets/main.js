
    function cekKhodam(event) {
        event.preventDefault();
            let nama = $('#search').val();
            if (nama == '') {
                alert('Isi Dulu Namanya Woi !!')
            } else {
                let status = [
                    'kosong'
                ]
                const randomStatus = Math.floor(Math.random() * status.length);
                if (randomStatus == 0) {
                    let khodam = [
                        'Biawak Sate',
                        'Cicak Racing',
                        'Kuda Pincang',
                        'Lalat Birahi',
                        'Garuda Indonesia',
                        'Fajar Karbu',
                        'Berang Berang',
                        'Keyboard Warnet',
                        'Semut Tobrut',
                        'Satria Mahatir',
                        'Kunti Bogel',
                        'Lele sumbing',
                        'Tuyul Mohawk',
                        'Kucing Firaun',
                        'Sempak Kak Gem',
                        'Harimau Sumatera',
                        'Cendrawasih Ayam',
                        'Ayam Beranak',
                        'Lampu Bluetooth',
                        'Kuntilanak Jawa',
                        'Bakwan Ikan',
                        'Pisang Goreng',
                        'Malaikat Subuh',
                        'Kandang Ayam',
                        'Lele Birahi',
                        'Jin Baik',
                        'Jin Jahat',
                        'Kuda Lumping',
                        'Pempek Palembang',
                        'Nasi Kuning'
                    ];
                    const random = Math.floor(Math.random() * khodam.length);
                    container.style.display = "block";
                    $('#result').html(` Khodam  ${nama}, ${khodam[random]}`)
                    $('#search').val('');
                
                } else {
               
                }

            }
    }

    let p1 = document.querySelector('.p1');
    let shareText = document.querySelector('.shareText');
    let refreshButton = document.querySelector('.refreshButton');
    let form = document.querySelector('.search');
    let container = document.querySelector('.loading');
    let output = document.querySelector('.output')
    let fill = document.querySelector('.fill')
    let click = document.querySelector('#btn-search')

    click.addEventListener('click', () => {
        var a = 0;
        var run = setInterval(frames,50);
        function frames () {
            a =a+1;
            if ( a == 101) {
                clearInterval(run);
                container.style.display = "none";
                output.style.display = "block";
                form.style.display = 'none';
                refreshButton.style.display = 'block';
                shareText.style.display = 'block';
                p1.style.display = 'none';
            } else {
                var counter = document.querySelector('.counter');
                counter.textContent = a + "%";
                fill.style.width = a + "%";
            }
        }
    })

   let hasilKhodam = $(document).ready( function (){
    $('#btn-search').click(cekKhodam);
    
    }); 

   
// made by @hendragunadiee ( on instagram )
