import { BaseCard } from "binak-react-components";
import { FC } from "react";

export const Description: FC = () => {
  return (
    <BaseCard style={{ margin: "0", width: "30rem", textAlign: "justify" }}>
      <h2>Karşılığı ne?</h2>
      <p>
        <strong> Karşılığı ne</strong>, TUİK ve ENAG&apos;a alternatif bir
        enlasyon hesaplama aracıdır. Dolar üzerinden, doların kendi enflasyonu
        da hesaba katılarak; girilen tarihteki tutarın günümüzdeki karşılığı
        hesaplanır.
      </p>
      <p>
        1950 yılından itibaren hesaplama yapılabilmektedir. 1997 yılından
        itibaren girilen tarihlerde, günlük kur ile hesaplama yapılmakta iken,
        daha önceki tarihler için yıllık dolar kuru baz alınmaktadır.
      </p>
    </BaseCard>
  );
};
