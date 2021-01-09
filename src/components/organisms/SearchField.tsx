import React, { FC, useState } from 'react'
import styles from 'styles/utility/flex.module.scss'
import { SearchButton, TextInput } from '../atoms'
import { useStringChangeEvent } from 'lib/customHooks'
import { searchHotels } from 'lib/hotels'

const SearchField: FC = () => {

  const [keyword, setKeyword] = useState<string>('')

  const handleKeyword = useStringChangeEvent(setKeyword)

  return (
    <div className={styles.flex__row__center}>
      <TextInput
        onChange={handleKeyword}
        value={keyword}
        type={'text'}
      />
      <SearchButton
        label={'Search'}
        onClick={() => searchHotels(keyword)}
      />
    </div>
  )
}

export default SearchField
