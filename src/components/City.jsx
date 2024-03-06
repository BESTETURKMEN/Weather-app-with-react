import React from 'react';

const City = ({ city }) => {
    // city bilgisinin varlığını kontrol et
    if (!city) {
        return <div>Şehir bilgileri yükleniyor...</div>;
    }

    // city nesnesinin içindeki özelliklere erişmeye çalışmadan önce güvenlik kontrolü yap
    const cityName = city.name || "Bilinmeyen Şehir";
    const temperature = city.main?.temp || "Bilinmeyen Sıcaklık";
    const weather = city.weather?.[0]?.main || "Bilinmeyen Hava Durumu";

    return (
        <div>
            <div>
                <h1>{cityName}</h1>
                <h1>{temperature}</h1>
                <h1>{weather}</h1>
            </div>
        </div>
    );
};

export default City;
