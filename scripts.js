//une tootsooloh
function showSection(sectionId) {
    const sections = document.querySelectorAll('.container');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.trim() === document.querySelector(`#${sectionId} h1`).textContent.trim()) {
            tab.classList.add('active');
        }
    });
}

//track
document.querySelector('#track-parcel form').addEventListener('submit', function(event) {
    event.preventDefault();
    const trackingNumber = document.querySelector('#tracking-number').value;
    document.querySelector('#tracking-result').textContent = `Илгээмжийн мэдээлэл (${trackingNumber}) энд гарч ирнэ.`;
});

//une tootsooloh
document.querySelector('#price-calculator form').addEventListener('submit', calculatePrice);

function calculatePrice(event) {
    event.preventDefault();

    var pickupLocation = document.getElementById('pickup-location').value;
    var pickupApartment = document.getElementById('pickup-apartment').value;
    var pickupPhone = document.getElementById('pickup-phone').value;
    var pickupTypeOrder = document.getElementById('pickup-type-order').value;
    var serviceType = document.getElementById('service-type').value;

    var arrivalDate = new Date(Date.now() + Math.random() * 1000000000000); 
    var arrivalTime = new Date(arrivalDate).toLocaleTimeString(); 
    var surcharge = (Math.random() * 20).toFixed(2); 
    var tax = (Math.random() * 10).toFixed(2); 
    var additionalFee = (Math.random() * 30).toFixed(2); 

    var basePrice = Math.floor(Math.random() * 100) + 50; 
    var totalPrice = parseFloat(basePrice) + parseFloat(surcharge) + parseFloat(tax) + parseFloat(additionalFee);

    document.querySelector('.result').textContent = totalPrice.toFixed(2) + '₮'; 
    document.querySelector('.details').innerHTML = `
        <p>Очих газрын хаяг: ${pickupLocation}</p>
        <p>Байрны дугаар: ${pickupApartment}</p>
        <p>Утасны дугаар: ${pickupPhone}</p>
        <p>Хүлээн авах төрөл: ${pickupTypeOrder}</p>
        <p>Үйлчилгээний төрөл: ${serviceType}</p>
        <p>Очих өдөр: ${arrivalDate.toDateString()}</p>
        <p>Цаг: ${arrivalTime}</p>
        <p>Суурь ханш: ${surcharge}₮</p>
        <p>Шатахууны нэмэгдэл: ${tax}₮</p>
        <p>Нэмэлт хураамж: ${additionalFee}₮</p>
        <p>Тооцоолсон нийт үнэ: ${totalPrice.toFixed(2)}₮</p>
    `;
}

//track heseg
function displayTrackingInfo(trackingNumber) {
    const trackingInfo = {
        status: Math.random() < 0.5 ? 'Хүргэгдсэн' : 'Хүргэгдэж байгаа', 
        destination: 'Захиалган дээрх хаяг', 
        deliveryDate: new Date(Date.now() + Math.random() * 1000000000000) 
    };

    if (trackingInfo.status === 'Хүргэгдсэн') {
        document.querySelector('#tracking-result').innerHTML = `
            <p>Илгээмжийн дугаар: ${trackingNumber}</p>
            <p>Төлөв: ${trackingInfo.status}</p>
            <p>Очих газар: ${trackingInfo.destination}</p>
            <p>Хүргэгдсэн огноо: ${trackingInfo.deliveryDate.toDateString()}</p>
        `;
    } else {
        document.querySelector('#tracking-result').innerHTML = `
            <p>Илгээмжийн дугаар: ${trackingNumber}</p>
            <p>Төлөв: ${trackingInfo.status}</p>
            <p>Хүргэгдэх огноо: ${trackingInfo.deliveryDate ? trackingInfo.deliveryDate.toDateString() : 'Тун удахгүй'}</p>
        `;
    }
}

document.querySelector('#track-parcel form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const trackingNumber = document.querySelector('#tracking-number').value;
    displayTrackingInfo(trackingNumber); 
});

//zahialga
function placeOrder(event) {
    event.preventDefault(); 

    var senderLocation = document.getElementById('sender-location').value;
    var receiverLocation = document.getElementById('receiver-location').value;
    var goodsName = document.getElementById('goods-name').value;
    var goodsDetails = document.getElementById('goods-details').value;
    var serviceTypeOrder = document.getElementById('service-type-order').value;
    var packageTypeOrder = document.getElementById('package-type-order').value;
    var goodsQuantityOrder = document.getElementById('goods-quantity-order').value;
    var goodsWeightOrder = document.getElementById('goods-weight-order').value;
    var pickupTypeOrder = document.getElementById('pickup-type-order').value;
    var paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    var orderDate = document.getElementById('order-date').value;

    var trackNumber = generateTrackNumber();

    alert('Таны захиаога амжилттай баталгаажлаа, Таны илгээмжийн дугаар: ' + trackNumber);

    return false;
}

function generateTrackNumber() {
    return Math.floor(Math.random() * 1000000);
}

document.getElementById('order').addEventListener('submit', placeOrder);
