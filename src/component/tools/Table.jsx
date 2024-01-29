const Table = ({ data, headers }) => {
  return (
    <div className="shadow overflow-hidden border-b border-grayMid sm:rounded-lg">
      <table className="min-w-full divide-y divide-grayMid">
        <thead className="bg-gray-50 ">
          <tr>
            {headers &&
              headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-right xl:text-xl text-sm font-medium text-grayDark "
                >
                  {header}
                </th>
              ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-grayMid">
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-x-3">
                    <div className="flex-shrink-0 h-10 w-10 hidden sm:block">
                      <img
                        className="h-10 w-10 rounded-full object-cover object-bottom"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="xl:text-xl text-sm font-medium text-gray-900">
                        {item.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.product}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.price}</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
