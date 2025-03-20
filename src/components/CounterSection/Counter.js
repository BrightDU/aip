import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import strings from '../../translations';

const Counter = () => {
  const [stats, setStats] = useState({
    companies: 0,
    aiDistributors: 0,
    users: 0,
    products: 0,
  });

  const [loaded, setLoaded] = useState(false);
  const [visibleCounters, setVisibleCounters] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/metrics/homepage`, {
        headers: { 'Accept-Language': 'en' },
      })
      .then((response) => {
        setStats({
          companies: response.data.totalCompanies || 2000,
          aiDistributors: response.data.totalDistributors || 4000,
          users: response.data.totalUsers || 7000,
          products: response.data.totalProducts || 1000,
        });
        setLoaded(true);
      })
      .catch((error) => {
        console.error('Error fetching stats:', error);
        // Set fallback values in case of error
        setStats({
          companies: 2000,
          aiDistributors: 4000,
          users: 7000,
          products: 1000,
        });
        setLoaded(true);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisibleCounters(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  const CounterItem = ({ value, label, icon }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (visibleCounters && typeof value === 'number' && value > 0) {
        const increment = Math.ceil(value / 200);
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev + increment >= value) {
              clearInterval(interval);
              return value;
            }
            return prev + increment;
          });
        }, 10);
      }
    }, [value, visibleCounters]);

    return (
      <div style={styles.counterBox}>
        <img src={icon} alt={label} style={styles.icon} />
        <div style={styles.counterValue}>
          {loaded ? `${count}+` : '000+'}
        </div>
        <h5 style={styles.counterLabel}>{label}</h5>
      </div>
    );
  };

  return (
    <section ref={counterRef} style={styles.section}>
      <div style={styles.wrapper}>
        <CounterItem
          value={stats.companies}
          label={strings.Company}
          icon="/img/landing page assets/Companies icon.png"
        />
        <CounterItem
          value={stats.aiDistributors}
          label={strings.AIDistributors}
          icon="/img/landing page assets/Aicontributions.png"
        />
        <CounterItem
          value={stats.users}
          label={strings.Users}
          icon="/img/landing page assets/Usersicon.png"
        />
        <CounterItem
          value={stats.products}
          label={strings.Products}
          icon="/img/landing page assets/Products icon.png"
        />
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    bottom: '100px',
    backgroundColor: '#FBFDFDB2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: '30px 0',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '1200px',
    padding: '20px',
    flexWrap: 'wrap',
  },
  counterBox: {
    textAlign: 'center',
    margin: '10px 20px',
    minWidth: '150px',
  },
  icon: {
    width: '40px',
    height: '40px',
    marginBottom: '10px',
    objectFit: 'contain',
  },
  counterValue: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#00544c',
  },
  counterLabel: {
    fontSize: '16px',
    marginTop: '5px',
    color: '#1d2130',
  },
};

export default Counter;
