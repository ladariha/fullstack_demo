# GraphQL
- playground [playground](https://countries.trevorblades.com/)
  - single query
```
{
  country(code: "BR") {
    name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
```
  - alias
```
{
  country(code: "BR") {
    jmeno: name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
```
  - multiple queries
```
{
  itemA: country(code: "BR") {
    jmeno: name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  },
  itemB: country(code: "BR") {
    jmeno: name
    native
    capital
    emoji
    currency
    languages {
      code
      name
    }
  }
}
```
- schema discovery
```
{
__type(name: "Country") {
        name
        fields {
            name
            type {
                name
            }
        }
    }
}
```
