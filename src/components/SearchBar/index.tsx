import React, { useMemo, useState } from 'react';
import { makes } from '../../constants';
import { IOption } from '../../types';
import SearchButton from './SearchButton';
import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [params, setParams] = useSearchParams();

  // marka ve modeli url'e ekleme
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (make !== '' && model === '') {
      setParams({ make: make.toLowerCase() });
    } else if (make !== '' && model !== '') {
      setParams({
        make: make.toLowerCase(),
        model: model.toLowerCase(),
      });
    } else {
      alert('Lütfen marka ve mnodel seçiniz');
    }
  };

  // useMemo hook'u bir değeri hesapalamak ve bu değeri
  // bir sonraki render sırasında hesaplamadan önce
  // önbellekte saklamak için kullanılır
  // bu performansı arttırmada yardımcı olur
  // maliyetli işlemler yapılıyorsa tercih edilmelidir
  // gereksiz yeniden hesaplamaların önüne geçer
  // string dizisini label ve ve value sahip obje dizisine çevirme
  const options: IOption[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      {/* marka seçme */}
      <div className="searchbar__item text-black">
        <Select
          className="w-full"
          options={options}
          onChange={(e: IOption | null) => e && setMake(e.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      {/* model seçme alanı */}
      <div className="searchbar__item">
        <img
          width={25}
          src="/model-icon.png"
          className="absolute ml-4"
        />
        <input
          type="text"
          placeholder="Civic"
          className="searchbar__input text-black rounded"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>

      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
