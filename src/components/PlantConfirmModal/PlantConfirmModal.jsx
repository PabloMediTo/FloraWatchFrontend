import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { useI18n } from '../../i18n/I18nContext';
import { getPlantCare } from '../../data/plantCare';
import './PlantConfirmModal.css';

export default function PlantConfirmModal({ plantName, onConfirm, onCancel }) {
  const { t, lang } = useI18n();
  const care = getPlantCare(plantName);
  const commonName = care?.commonName?.[lang] || care?.commonName?.en || null;
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (!plantName) return;
    let cancelled = false;
    setLoading(true);
    setImgUrl(null);
    setImgLoaded(false);

    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(plantName)}`
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled) return;
        const src = data?.thumbnail?.source || null;
        // Request a 400px-wide version for fast loading
        const sized = src?.replace(/\/\d+px-/, '/400px-') || null;
        setImgUrl(sized);
        if (!src) setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [plantName]);

  const showSpinner = loading || (imgUrl && !imgLoaded);

  return createPortal(
    <motion.div
      className="confirm-overlay"
      onClick={onCancel}
      initial={{ opacity: 0, pointerEvents: 'auto' }}
      animate={{ opacity: 1, pointerEvents: 'auto' }}
      exit={{ opacity: 0, pointerEvents: 'none' }}
    >
      <motion.div
        className="confirm-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        <h3 className="confirm-plant-name">{plantName}</h3>
        {commonName && <p className="confirm-common-name">{commonName}</p>}

        <div className="confirm-img-wrap">
          {showSpinner && <div className="confirm-spinner" />}
          {imgUrl && (
            <img
              src={imgUrl}
              alt={plantName}
              className={`confirm-img${imgLoaded ? '' : ' confirm-img--hidden'}`}
              onLoad={() => { setImgLoaded(true); setLoading(false); }}
            />
          )}
          {!loading && !imgUrl && (
            <p className="confirm-no-image">{t('confirm.noImage')}</p>
          )}
        </div>

        <p className="confirm-question">{t('confirm.question')}</p>

        <div className="confirm-actions">
          <button
            className="confirm-btn confirm-btn--yes"
            onClick={() => onConfirm(plantName)}
          >
            {t('confirm.yes')}
          </button>
          <button className="confirm-btn confirm-btn--no" onClick={onCancel}>
            {t('confirm.no')}
          </button>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
