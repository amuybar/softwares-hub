import React, { useEffect, useState } from 'react';
import '../styles/Photos.scss';
import { FaSpinner } from 'react-icons/fa';

interface Photo {
  id: string;
  url: string;
  title: string;
}

const Photos: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('/api/photos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Photo[] = await response.json();
        setPhotos(data);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <section className="photos-body">
      <div className="container">
        <h1>Photos</h1>
        <div className="line"></div>
        
        {loading ? (
          <div className="spinner">
            <FaSpinner className="spinner-icon" />
          </div>
        ) : error ? (
          <div className="error-message">Error: Error Fetching Photos</div>
        ) : photos.length === 0 ? (
          <div className="no-photos-message">No photos found</div>
        ) : (
          <div className="photos-grid">
            {photos.map(photo => (
              <div key={photo.id} className="photo-card">
                <img src={photo.url} alt={photo.title} />
                <p>{photo.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Photos;
