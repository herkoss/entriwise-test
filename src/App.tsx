import { useState, type FC, MouseEventHandler } from 'react';
import { ToastContainer } from 'react-toastify';
import { CSVLink } from 'react-csv';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from './components/button/button';
import { Card } from './components/card/card';
import { Navbar } from './components/navbar/navbar';

import styles from './app.module.css';
import { fetchExchangeRates } from './apis/exchange-rates/exchange-rates.api';
import { showErrorToast } from './components/toasts/toasts';
import { fetchItems } from './apis/items/items.api';
import { fetchOrders } from './apis/orders/orders.api';
import { IMergedData, MergedDataKeys, mergeOrdersData } from './utils/merge-orders-data.util';

const headers = [
  { label: 'Item Name', key: MergedDataKeys.itemName },
  { label: 'Order ID', key: MergedDataKeys.orderID },
  { label: 'Order Date', key: MergedDataKeys.orderDate },
  { label: 'Amount', key: MergedDataKeys.amount },
];

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<IMergedData>>([]);

  const handleDownloadClick = (_: MouseEventHandler<HTMLAnchorElement>, done: (proceed?: boolean) => void) => {
    setIsLoading(true);
    Promise.all([fetchItems(), fetchOrders(), fetchExchangeRates()])
      .then(([items, orders, exchangeRates]) => {
        setData(mergeOrdersData(items.items, orders.orders, exchangeRates.rates));
        done(true);
      })
      .catch((error) => showErrorToast(error?.message ?? 'Something went wrong'))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.root}>
      <Navbar />
      <main>
        <ul className={styles.flex}>
          <li className={styles.listItem}>
            <Card className={styles.card}>
              <CSVLink
                data={data}
                headers={headers}
                asyncOnClick={true}
                filename="entriwise-test.csv"
                onClick={handleDownloadClick}
              >
                <Button isLoading={isLoading}>Download</Button>
              </CSVLink>
            </Card>
          </li>
          <li className={styles.listItem}>
            <Card className={styles.card} />
          </li>
          <li className={styles.listItem}>
            <Card className={styles.card} />
          </li>
          <li className={styles.listItem}>
            <Card className={styles.card} />
          </li>
        </ul>
      </main>
      <ToastContainer />
    </div>
  );
};
