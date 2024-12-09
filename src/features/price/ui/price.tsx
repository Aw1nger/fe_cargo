export const Price = () => {
  return (
    <section className="container py-24" id="price">
      <h2 className="mb-4 text-center text-4xl font-bold">Наши прайсы</h2>
      <table className="w-full text-center">
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-2">Транспорт</th>
            <th className="py-2">Цена за час по городу, в руб</th>
            <th className="py-2">до 30 км</th>
            <th className="py-2">до 50 км</th>
            <th className="py-2">до 70 км</th>
            <th className="py-2">до 100 км</th>
            <th className="py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-primary">
            <td className="py-2" width="15%">
              Газель 3 м
            </td>
            <td className="py-2" width="15%">
              1200
            </td>
            <td className="py-2" width="10%">
              1400
            </td>
            <td className="py-2" width="10%">
              2100
            </td>
            <td className="py-2" width="10%">
              2800
            </td>
            <td className="py-2" width="10%">
              3500
            </td>
            <td className="py-2" width="10%"></td>
          </tr>
          <tr className="border-b border-primary">
            <td className="py-2" width="15%">
              Газель 4 м
            </td>
            <td className="py-2" width="15%">
              1400
            </td>
            <td className="py-2" width="10%">
              1700
            </td>
            <td className="py-2" width="10%">
              2300
            </td>
            <td className="py-2" width="10%">
              3000
            </td>
            <td className="py-2" width="10%">
              3800
            </td>
            <td className="py-2" width="10%"></td>
          </tr>
          <tr className="border-b border-primary">
            <td className="py-2" width="15%">
              Газель 5 м
            </td>
            <td className="py-2" width="15%">
              800х2
            </td>
            <td className="py-2" width="10%">
              2400
            </td>
            <td className="py-2" width="10%">
              3200
            </td>
            <td className="py-2" width="10%">
              4000
            </td>
            <td className="py-2" width="10%">
              4800
            </td>
            <td className="py-2" width="10%"></td>
          </tr>
          <tr className="border-b border-primary">
            <td className="py-2" width="15%">
              Газель 6 м
            </td>
            <td className="py-2" width="15%">
              850х2
            </td>
            <td className="py-2" width="10%">
              2550
            </td>
            <td className="py-2" width="10%">
              3400
            </td>
            <td className="py-2" width="10%">
              4250
            </td>
            <td className="py-2" width="10%">
              5100
            </td>
            <td className="py-2" width="10%"></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
