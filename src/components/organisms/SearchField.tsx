import React, { ChangeEvent, FC, useCallback, useState } from 'react'
import styles from 'styles/utility/flex.module.scss'
import { SearchButton, TextInput } from '../atoms'
import { useStringChangeEvent } from '../../lib/customHooks'

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
        onClick={() => null}
      />
    </div>
  )
}

export default SearchField
