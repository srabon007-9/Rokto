import PropTypes from 'prop-types';

const Donor = ({donor}) => {
    const {id, name, contact, bloodGroup} = donor
  return (
            <div className="card card-side bg-base-100 shadow-xl">
        <figure>
            <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAAC/CAMAAAA1kLK0AAAB4FBMVEX////71r70rYX71r///v////2wGR/6176nAACjAAD0rYb71rz0rYMAAADx8fGrAADy3+CuAACmMzfXxcNSAADh4eP29vbt7e2dAAC1ammSkpLg4OC6XF5OAACPQADzqoLbo6OQRADCAADEnZ3MHiTDw8Ozs7SRPACTSQDaAABJAADQ0tOUPwD/4MaKNwCMQADzw5+IAAD/HSPv5dv74dD0upX6zbG8AADPAADm3dy6kI6kGxucJyvKAA1qAABZAACzDBevMDOmpqbTvqu5kXPFpY6lXimaURPiuZnh1Mb/7N383cvooXLXk2LGf1ChZjy2cD+0flLum2zIrKrSt7udLS6ucnXFQUa8VVW4SUacP0KlYF3IJCehUlScCg2wKyy2dnOnXVjgAACbPDq2Z2ji0NCvnpuoTFB2KSe6iIynk5J7GxWnk5qCSUqDVlt4AACEY2aRfH5gLjRbGhjeHCCLbnGRFhp3V1tlAADxHiZgJCT/ExjfSlDUenvPWV2dnZ3Yk5VXV1fNaXPtx8wfHx9GRkZxcHHVqIOyhGIxMTFqZ2hJR0itusY0W4svUnRgcIsaLl0AAEMAIFUAHFtETWc7bZwmWZUjRXUudLVKOleXmrLmNTv0nZ6va17BjWrJk4VXHHx2AAAgAElEQVR4nO1di0MaZ7YHhnFgZoQSYSASmeILLA9pkEmQJLqiMxDeMdptHiapNVljmjSJIU333m13uzfavbd3u73b272P2n/1nvMNIOAAo41Gvfm1jRhGmfnNefzO+c43NRje4R3e4R3e4R3e4R3e4eTAnBxYXLy+ZtN5uJC8DocnhUM9p7eA5PoZ64XhCw5r9eyAwUD3PPzuJasdjrcsLa/pOPzEwL1svXhx9KPf/vbjlMVhubHW6/CbVodl5WM4/NbFi47bySM5x6PAQPXi8LnrbnxpW1v2ODwj3Q9fcVjP1g4fOHt5wtr98JODEcvEnYHdb5O3LfbpjgfThkWr44xqM2b0ieSDiQvLh3yGR4MRx8Rd2kCbDTRdc/Zpq7UzEwMe+7IZvtK02Vw7/OLwaWBi0T5xV321G/OmLZ5OccJdddzc8ysuXlg/hDM7WiQ9dR6acdOx1OH4u45VYU+eGJmwLJ7w3EEvXfwY/KL9ItxV+6Lm8WtWK+bL9h9Ynlg50bmDNkxfGE7uvS5wDvsDzZ+4a78HP7XncOHO5duHcH5Hh+TKxIjBvNci4A2r1i02p6wDGn9NGwYu2gdOsnOsX/wIz34vEYYHdi11sGZJdRDVn1688UbP7Gjh9kxc12IBsO7QSomLHTwGTGjYoWUrJwTrjkud7HnRonXJ65YOedJsuHvh9on1DXPVop0bAAPWMxp/e9bSUU6veTxJbeM6/hiwpGydTn2/RNCGG5pR5UTgLsSBN0fEol3rJ04CbFVL55S3b9eAyKuZcU8ABqyXMBeaO7y5XyIMtx2dS7VjjbOOu/jljREBvqH9u445bB4oG8xvkAh3ynIipcQIVJid090BiDAsO852oPUYwD0wonbV2iGkOosIw8GIQCmh9fc2OIe3HUenUxa7fWV5T4GA2e6SzWDuKIEOQoThhhp12s+hCudg3XsORwa4yGWL5dK9VYtjaY9RCEvdr+lARAxY95oEfdNhv3R71eNYfWteQxuuW60jgsE8UCVtpRZM26tCN4c+EBGG2/az7X+17FiBczAMrHTpCB86Pq2VkMmV9hTvXukaIQ5KxJq1PXEMWK3XyQtwxbfmHOYz9loP9rplpdU57jkedEqcKg5GBNz/auvlnoGwQT7HvfL2unn0kqXejF5qrYgWHZYey1kHJMJWvdBSv0DUqN0Bd+ottjUfNFqwI/ZLTX+f9ExM92geHIwI2jAw7GhuaC9b7tZerVlTeheY3zxGHDdq5t9SEblXNjs1mho4IBG0YfoTz26YsO32OJcd93qe76Eh6al5BG24t9tbsq1evNPz5mgT8Wkv1wCcm0gl6zYxYP2NoL6GoPk29feIBW8PWsWIvd5vd69enk1qNmybMWA5s5csYf3GSM/QL5yZSK3VmJi231RXg9xV+54FsiPFbXvNUNesICTxnNZSF+14x7oT4b5vvxTa/VZQPSw0vjju7fmZto8nrIv1jx8hH5pcdWjwepSw3XCskJNKrpAEKqxbJ36jI3q771suhRrp1RYKEUMIjd/XQYRBePCJY5kkiyV1tWMtZf/w7RYbtEG4bbfgKIewBKdiG6lemPhUwKWtHm3WViLcY2Pkfnp1WQRg+vJl67TbQD/B608uW+1Lb7voAqx7HJ4H69d/d2V52TN88c4ioWGfRIRC+yPCsPabi8PW2+tPriyOfOqBiuvt+kUNyZsei8PS1+e4cHF2xNYzTBIgEV4NInS5BsJ8/czwsL2vz2J3WFePTb8mOXLzQXXl9vpanYWeXLgf2qu7wbJORGh8XC8R6qdWV27cnE4eq3Ez28YVF36tndIBiZibm9NPBGDmCsaGno54lEhaU5qNKm3YQk8t1XGv6/7vfvfIG6rDO/bo0aMx7z76Cjcs1/d/qoeL65bVXtqhCe6xz2ZXHnpdj548eeitM+F1jT9+/Hh8P0Qs24/dTNG64+Y+XNU790Hqyecu1yPnzCOX1+Ui/7lc94ecH8x595EBRuw9qv0jh/lGj0ZMC2zep84Z52dgEUPOp16v2+tViXjkdDofuvcRJZIecMhjRUQS+wJ6z0jwjj2bvVV9HvK+cM489nrHnr78/D5QEXrsfO58Cazo/ljhDASJY0XEtH1V97GC1/v0yvnNvpkX958PPR96+vDZB1/MfPD506fAwwdDQ+NgGrp/17rj04Oc7uHhkn7PcHtDT2dmz7/qqzqHnBsbQ07nF6lbfakvhoacMxvVjaHnEES9etuPSevxWhnGSQh9R5rdrtALZ+rV+fOjd6obfbOzfak++Aa+rVZTo69ezW4MDT0Nubx6c/Gq5VitDN/UnIjSgOB2h17OpDbx0jc34curvr7N86/g5Whf363NzVejfRvPnS9Cbr1MjDiqBz/tN44krvfqgdnlDj3+YpaYAAFc+B5sPB8CJtz6mLCt2I+NpqIN65jOddVabu+LK6M1DjZHR2f30tA3uwlMPHS53frixLr9+IyiClW8KzqIMLvdczO3VEvQ4oBg9PyrjaEvx1w6TSJp1WmNR4BFS4rWJSsFCBAr6BcaDrGLzfObM86nLrfOJHpPb3w6fDxwrOtT14J7zAmO8aqjNdSZSA19BplD36cPvMW1vlaQXK6LCJt77gpkih489M2eHwXf0C0wPcdlkGZEc4hWCzb3ww/B8LtwcGt0dHTz1flN59CY7ppjucsU45HiLNTCZl2C3+ZFImatlk6wXvxkYmLik9+/mnGO6Rba1y2XjgUP9A37gE4iBO/TDzdf3XmvF/7p/IxzXG+MMCQtnmPRu7VdghChrwIEIp5sbvYeEvzt+Q3nuG7XEJbsR1Nv0Nnui1Ypj97CQPAOPumb/U1PIs692nDqjxH00uFHS9pgFqbkaCne5RggQu8NEbwPr/T1ESJow3v/3PqmbWys3s4FIobGdLsGfcZ++Gnjao7jpJJPyXY+RFjSLe2AiJkaEQb6D8Pvt7z5VX9/f820zoHK1h8sbXcOvRQXIhxnNDJcZdLfhYnbDr17EQXv/aFUzTW+fu+fL7/X/OYfgYhx9eW52Y0v9ROxZvUcsqK6ygGMlJGJbPkDCx0vdtqht+whRKgWAY4hXP5D03vu/v7B/j+qr8/NXnkW0k3E+iGPiNBTaA4EVGQrGJ7vdGBSY/pRG4J33FlVLeJPYA1fDzeZxHj/H0P9/eqtPTf7xbOQXmVJew53cYNm0BjqYDJBX6WTSdx23NRZa3jHh1Qi3vsIfuKb4T/tvveX/jnDn/vHyGsg4jPdREw77giHuNQlMBQCSUAH4RhO9nVKHmseq757InjHPtggRHyNRLw3vBslhP7+r8b/pf81+ebc7MxLvUUXVDqL+leW9g2BYRgIDioNTC6bpSiu5JM7MHHXntLlHLtE/GEU/nj/8uX362+N9RP8mfgGEuHVR4Rww3H7EAW2QDhAGoy5bNImmA1xhmMq/qB28hB0Tu4I3tCXMxgshVuX/7T2/ujo5a/rbw32/8v4+GB/P5ES5/qcn+sk4qbd003k/EoIGB/ALzgul6xfoDvL5Xb8vrRmNEimdGWOBhHvAQeXL8MfdVFl/rb/K3j/z/2D+J1KhJ6ssY4zXIe2wkMzRiTCyOWyTdsVbVkusuXzLWj2otY8evpESISTEAEkIBpEeFVb+Ev/t/jdub6hF7qWeRatVp3rKdntfRuOmc4R8cBx2bHWIiJORTJKeF4zMuGgfs9fDUQ8c6bQNf6pRsTX9XdstqYv51aGnuohYsDTaedw+wfPR+XMVV2HNmGKmANFZW3etnNx5yhJCVQ0nmtQG7nsEbaAiM8IEYY/qSYx/I3mcedWPtBDhLtq17fgl5ajFY6Zurq/qHrViJmTo5Jwvt6WYQXBHacoSQ5rp9Gb7YPzeyF4vY9VIr4ZJgbxEa3p30DEQx1E3HYs6dHW8UogvJWbAuzLOwSU1ZAi1JhtCzW8w50EguANruJXtH6jsNQzYAquOhGG90eHLw9/JGjbkD4ipu16FK0wHwhXGKQhx3D78A4a9AMECKaeu+AmIuuCO4s0UKitIpVwWCuNgq7qEbkaRJjNBvc336yRZ0vMjY2Nwz9fzc2Nj4XIN/qIWNMTKOm0HJAzhAYOzVy/TUxhfcHlQq6m2T+vK5Q1coyxpjSN1I4/mNb42RH7SvcWDSGir7UxI3z7+vUfX//lNYipfx0c/PYvg/86iFmjJxHmG6TW6p46s6WAf4e5CjTkVJFM6Q0TcVJnMWOh0K5P0GMDEaCBaRQeRqjBoBrdixs9JsMxWM5oEzHY/+dvkYjXKhHOnsFy2lLFM+xGRHw76q9QV69O5TD4qwJxqusvbQArLTChpM2Nw11qJKL/7bt/T0cIP7tMkDS658eTe7ZctQLT5x4iBsfHvxqfG389OPjV2Njg3NhX4yixexHhXunqGJDi6YUgegWYw64twwt9JkE6EFRSPecQGety//W7H3/8bjDSQoSRiSla1ei640G3D0JBtTEKRNjcdRgMobE2uLH6fNFDYt+1d3vmDI0p0xfcmkJzYLjd8waT0MMEzWGNlVTvmJu4R+j7738EfPdXJtJUlRspRioF9qZR20rXOhSJSL1CIhowGOYG2+BFInpI7F6DCNlK1L8TAWuYYjiumQijUU/GpXgjxWXrR0LCCI397YfvvyNM1NzD2CjMuQpWo238Tju6zVJB9fk8tdlGxNh4G1zYoXrcnYhlIqU63dz4vD9Q4oCFCNZLLRaBUaKnTdAin+Byu4FfCGWZ+z/8xw8qEz8NRji1IGWy8XjWSEEa3dPKtHk8XaIEluGzSIS7yTXQBxGhkEsdPbUhES+7xgj3SpddhGpwuIq5wthqDOT0md6+QYkmU6JJo0CZRTHpv/8H2sRP33/3n38loTRLJjiELMdEdvz+9jS63K34AiKco6NtFtEYQa6/IEQ87tqzHHHc6HRfUTkoWxgjc6Rg2kNFb1VFszzLU4Zdi8tiNc5FXv/th59++v4fP/74j0GOyTYMJs5ANRr2taXRtW5jZba9RJh3iXDVvmKwfPJZNyLoGx0f4hcv+QI7OWINDIDTYKJnBp0CgxAz3kbfK8mR6EhF7n//A7jHxod//2sk2ZT6oASDNBpoTaPm1S4zTTbv+MxmB4twNQhBi3jyslvPMmntsNoZJ3patYaO6JlBE0AEz7N1t/dioFEjY/rvf/vxJ0/fyovmGsyWBMGNNVilJQ6vaz7aoIkIEiPqPJD0GcIMin+EGunzStfm7aJDI3eaITj4sdpGGqguRPTyDVoEIoAKMU0uzJYzGmtmxXG51//54399+LXZ1pgYF6AQJU1dCqrRZiau2290ZByIcG5i+hQagAsQBFpohrknEXcdWm0ICA7BBRIcmG489PSNbB5oYJGKDNwnc7Yl0ETmfvzuv/Gva6eXzIE11FRrJdzc1E16OgcJiBFDm+fvoFkR02q8aMO5vpmu6XNVYyUjW4oGd1QamK4GAfG+e4GyHSzwJgKRjZvdVEuUgSg55g15aZwgFkg6AYNQ32KYiq+pqevustwDyv3L2fP/0/U0CBEfDn3eLX3ufeqObX4yAGWFmiq6WQO5mO6aKqv4yryJZeFf3pRlWokwcllzrSQXvGAOJJ/UD8g1p1HbSjcivC+vbJ7/3/d74MyMs1v1aV6xt6oIVA6lDJHTcIOgtGhem9IgokeQELajcoEH52BFluclpplZJkv253ixPB/JMFQrTZEtX7ieRoUuRJjdrrmhL0Z//8kFezMcDvKHo/bS8aHT+azbnCXdJqfScpQIqFzDSntYRM8Emg6GizX34MVEk6Oh7iZZ1R3y3nWkfokwrY4TyQQDtbVRt9X6XscPcLu9D4ecG3231Om5PaNkOGdWnRlyPht3udyd9UjLc1DjUFZgdZUjDSVdRDDaHcJdpqGCn1TyaBQYKRJc/ddyORvygD8dymaWZq0/M5HWj6ylUdye3CVYGgS3yzX3bMjp3KimyBD6JrYuySjdJhlMr27MDA05Px8DHlydN++t7nbMhflwoJIDcyARktHHBKOj8EoHJxtGwUv1Kr5h7DaKY5ifrbOXMpG2X86V1LXRka6VuBuYCD18DFSQ3RlVnCdEBm71pYCD58/hjeefj5ONTV1O9m792dl0WomWpKZaWwcPFMPEevcuabQ0pWCqpY+Y6gJkcyXhIQclFxNZSM2u/Ey1sA9VCKlGDQ+6P1oPmXCFxp8+fg533vnBEPwJr57jVyBn6MuXD8fUDV7dlhAHLB5BPddAkDQkKY3qShNwG6lYQpR6EoFIq+mD2ITqHlRcfZKxUPNDirk3O1tdaDMKqMF82QFLjzkewoTL5R0bf/ri5ZfPnztngIEZ5/Mvn7188XA8hD6B/3VdShWWkG16IVBTDvpIQDBSDNKimNBFBPb6FNAUPEBkJRSQDAmWdLIRlSML1Vnrg0xrpIhsBf2Xeo7BCq7apj6svMfGx+fuP3qEDeyQutOPwN1jxn3RvrIGCgq8gpiDXhY4KQF3F++wroYdxMS0D4wCgLIixhnJshdUH7stDibC/ewB/4Cg2XQekcyHsyu9pzYEsr9RJcMm1KqOXRZcUJL2mni4PRv1Q64gZYV+a0iwJA+wJlH3mpdtO4BCE7QVi0YBCZpx2yiyFlgDpMzVlVnPz2AV6CyEnMyl2ZXotuaKYDvZoK2IUTQqDHfNFtSHi/Ta7p0O+8mqjU4ewKaBBlFk61XEPlZ6MFLkeREMSRRjEIwoLtv2mRA0Vy2zKw9+yYBdRCLGX+5ZZ6uZSrSid5+bYHO7vA243Ta9w3EQ0El/OqcvW0JYA6cQiX3XskBuH2PsAhhFkUePEvmEhC3x9h4HY2QWVj0W+2z1zOrHSym73XMPCKkENFcE3xzoBey9TIGC4vSpBoaLoVqus4BXZNzXPH9anpRVeQXuwe0lglhF5ufVlNVusVj6Lp0FccFQka1wh8GaN0ECmmqgLNWcgjH2dA2K4RKsCMYA4PmGLtjfxwrzAX+xlj4SkhYRgAgjLSz88stChlLTKYV6W2sd7I0AMxoubed0O0UMaOBNreB15s86aENW9qHmBvfi+VhH0QIOQYbP6t9KclRjHexXg0ZB7dvhIlNM1+qyiQZIFDzb7BQ1JPZ3erhwNu+fhEyKZsWzkq67QFoUZJD9DZMBghqq7QgKKD3JgjJioiBO8WuJIJcSLwVAXvEkfSQ4fVmbYnZ8cvZNEUHH43EbWdoGrwDoSpkcWINJ3EsBEcw8e5BToxeCk+U8sQmRjelL3EynBfP9wZZdmC8pwXA4HFTkQHiHISMaVM/SAvxUSvB8e2ioE5Evlw52PvFt1SgQEDT1xCkKAkVgW58woDVfGuLp7XA04FdkRNAfrkg5XS6BtwEjpAbQSfiCHFUOdo9oUp3LeZNqFQlO1+mQQKEvj9LxbDadTmfjuzwI6e2gXNnKSBxZpWG4TIbR0Y7EW0BRHWhQjcEfLaWFgz+piN4O+4qYO1hehPJDV/KK7PiivamPpyvBcCAaCETh9svb6axAC9n5ypbEkVzE1Not+tKlmihEbR74fDEYlRfi5N4efHwbMqmcJ6EGCllJVwLDhbBKV5lpS1d80TCYfwVRVvyBQFgpKcUtRCYjRXDrjFrMoBlSPXwDVEOCNWkEB/AJsSAH/PPq/jRa357+DgBpS2pStAvQV+0tKs0Tk+Sw5riVivh8MOor72Q4hspFImShMrMDwdHvi4J9RH2+oLzTpuI6RyiKQmPQjAxw0oWyP1BSl65+HQvqiVcwaOIvxlQq6bAJjqkEfdt7xijI+eAwR3mLgeLpKq7hR3DumaMIIZIE1pDIF4qyr9Q23qCdwYEedIlOgaEILCzUTZPWUx73AK3WpCb0DpbVEyrI5h8to0iXQCsjC1Nk5k1dbya5kQAHOjHEl8NbLUxQwITGx0joEix6hQYLSjQ4T5YjdD5ITx8V876guviBNpegehXCcE1S2e9vnzICGrCQvjpVW7GtO0DTRXIMJru8vxJpuXImkWiJE7igI7EQH9WV2xaXAF4wMGynD2VHBzYD8uoniSJaRa9kCjIzGAzPN7oUNK5Tlsm8G67QUUZ1OZnMsanWgID4gh+RD5bbopEkNvkk6CvU0SSAt1kC5LeCPDlZSeMHH85OBvCPotrsIU1Nhukl9CIJWfEr9ftCRuVrNAAFYNUJto5EIhGLxSQA2LoIJU5xMo8pqhksq7okRZqQaAt7FSQYQ6EcjJLAQBu6/F8dfh0gf9RXjFmkIsL06qazBcUflgkVWcW/EyHjj3glMbRqXm0XwNlj6hNrgLvKgkHwYmvZSyXEGENKKsIVv7fGBkBgCCjzRM4d7pME4o11UlKLoYN044FJmPiiEpyEBLYQLXPYZcO4iL0CtYGGF056xa0GnldkHoloCZcJniV2hH1EHumCu9EaHkFE+7e772h/Q6BRX2GoIBmLZyGXMl2piMFlikCFTwlvRXD6Ea9IgupQzfGyEgwqilwuqA2xGhvAnQxXKcZaXI+BaqruS/BL1WZ7i0v4a/LRYOixxvlmmMBOHrZ3WVVWYKzomEEoDu88n5eD2HvOkfUzMHHS5igCA3IZ6iogww9FZlGt+VEJTsr4im9VDmARvKZuQqcAEe1TtrOGo336q7AQ9JVFk9oKZMUuuoJi8DwLcpGN5NQRcYZLkBjHFzDuEr8QUUApfn8wKJfLxEiKSInY3hlL8B2EE1Dnj9aE0xE//TUOqgJbFazqIJ2poBLkjpm4HKVuCOFIxmH5ciGBOSJRN3VTHh0F2VBqlU0MxVXTb5L4WhOyEU+Ib5AsEazVEoSHI6eCaE0cszHxHamgEiSYSBEK3QJElhrtRRlXDcmCKuECsz/ykS/k8/gS2JXaq+8YUZCFXRYw0QALgeAhCSf9VAT8ZdLgVcNVgtOIFSoRrJGU01xEUlNEQclEiP8zZAYH0iFPmBCJs2FptzcdUYSwQrFGA0kS5aDPV0kTl3irT/mMb0OZWKgFe1ZdDjIa24Qx3n9JvblgD6KJ8CCp5mCUJA7XKPAFyKtEXVpJUHC0T8hJItqNXFBTN0RH2e/z7VZUbxk4Di/XJBYqooTUygOHBZQpQWa80C9EvNSijG6EkloS88SjOKamsOt/kOzSahFqsEEi0CEUHySJ9DFhgQBjhUKEt9rvZlEF7S6eSyiaYuTuUhxxAFNZZrC3QOF7hUqkuyJrOIakeo1SgJganAzI88eKBYL4vIIphEeTZVEqJSSONJVIriShUr3fCRLh5DIpto1UTAQhLelsy3JqqsiDNAsolToJx+pR6QbUFaVJP3gIb1InK0TkAm1eIktlLGm0URgoeVEuUTlkhYOkm2/rOXS2ByAUw6Op6N9eIBtsagwcLx4M2LgpBXyKmk7J4jHuAAFGUAoiEWgfmDdFpZLD4VBwC0g3Sonh9LSDKQobkmhPMlmXoA+rqHwToMFDwn65SDIgKiSiC0hZlOCw0MJ1FzFYyU2BpDCSTqusSJweIihjQlTVd77eHKeP10Ox2xBPlyBwlgtqm5fIH9IsAiJAN4lq1wl4gAsDS+HLgUyHdfa9fqH24viy79hFSG3QWUinQbmYb+4V8Am4GgarSfCLKVy7SyBT5ehWpBYnuxoF8SKWNKKAyOPrEu2g09uQ4+WC2KgUIUaAYAJmZGIPRpJJ2KJvJ8LoWCRhYkRIkcAja25NP76Ipyv+aLCs9v8xlUjoDKaizJCGLWpNtjBZYXBAC+OolOjIQq0SIcqVLft2jl+a6AFbuhKMQhZRVVYMbqsp74shD/ASCMr7y2TnBwoMSewwfkEmwUS2PhpY8CvH5Bm3+4OQXSj5g0WMl2wMDEPZIf0pCZt0fFAmGyxwPishxiLahatUW8Um8YYtqE+vOM7ZoiPoeLYk82r/pqBwU1OqQmRZWYnlcnjL0WfyGQ2VDcaSaGrDQKHm7/QwrJOBBV9evaHKFhoE+ghmQSlH5KWRg/td0dqKxWBqaeQeli9Gtzs8heSEIBstEvsuBCFScsQg+OLkFmnbMVhJ8eVM0wbm+kgMJZF+j9qrxnyBW6aOsZzsDTqokPZBuYJD5CQX5nFqFA0CrtbEF0qRhjlwjFRbwoFIAgeWFQVrfBHMIX4yg0MTFibz2Ij1Zcg+POw6KqUISaOglOBifZKx1nogq3jq7giJdDX9CiJfxPG0ExolmxD3g28QDcGgzgZXCEpkyQ8VI+aSSH3bIPa3sV+F6QJ4kJXitWvXykqQLBmaT3SAIJgPQ7qUd6ZypCPBF3xboLOxB5UQ4a7LHOZOJIKReJG0+lRLkctAw7V8Qi7VGDjxRAhK2cT7pSnUTxATFNSXkC8jKBkLk5mpWseXivEmnIpBxcUWFb+fEJGQ5Ao6xYlnAZGOFgolBpf4wTOKPswYICAkbN5PgqGoUQGFN7Z4gQeeLSvFAjGJRCzmXzjx0aGBbUVGzcQxCfR8LLxIBYqNGUgl6BYRXA2NYczkEhBQlGvXYrHE5DUxFtuaPNEyqhVCyU8KCxARECEiU6TQAoMogtjMkS1z2ObfwjEQTJsi8AAUxMoyGIQyfzrcQkW6RCIiyCc5KEVQQoBB8Hnf1tUpsqE7AVmiWKEwXqJ6KOavsUDETjAm7Si/YkT0+GFhCx/0ATkjjxuyKHLnIY+Wp8i0BKYPthjkiJwsyP5gsEwsYmsysRUmQ6KnhojKFnmwMs4DbZHpKezsg5SCSAnAbAnpI8JA4VH2l/OJQlDOAxGJYLHbc9pPIOhSHheAQUTIijRFBsagggDRnSPj1lCX5/3Yrkrw5clCHgLDjh/zRSyIdffpMQdUEvkEpEUWm/mRHG6Nk0RVdGOkBNmAqpsySlCNFQgDCV8BgkQikD1+Szi/CrRcUMdr8r4M2ZKFxXhZYUj6QAFRVnAtLCGiqI4hfGrmPJENqW6oKFhQQ3hUyLAIigXevxXBshPLj0J0Cxc+2GItb8YSfvgqlStv+7zfONKBMmlSQZlB9DSEx6KPI1ef970AAAH7SURBVFPmILLyoLqhBouJqCUJEVtBzJ/R0xUpCeajcrEol4LqBCkTM7HyjrrVn2JNZV8G14TZvL9w7ZoJidiRIVRUSqcoOjSwEI5G57OKOvXAQfntz6jT6JKY95PWjMQWgtdIdQFysijGKoFTpK3rwCdQZAXDQpnMb2OeKMiM+j8qSICTZHBJEEpypUbElj9vUk52q7Y75gsxMg0D9bdcUVv4ECqVMkV6eLtElBTZt3Aa/aKOSp7F7UkJls1P5inSs4fSYjJDhg5FlhCBBuHbXrCdMgXRilKeT0hqYyooSmSGRuSLMsPhC1QW166htPbPkxHi08sDEKE+gIDNBxXy6BacklB2cmgkJjEPsvIaK0llWd2AdYqJ2C7iKpdoygdBYZnIvC2fD4JyYHHEHFUEGETR/zYmiY8WWR8OIooF/3w6SEbPeHCSMi/ig+GIrLzGbylKVt2Nd5qJoCtRRZaVQMWQ9uPgKVkVL+AGFmzjhhVF8UW33WQs6FTzgBvkgj5fcAFsI5BXd0TJhAggJLCQ3t7eXmg8cuF0E4FPAcja8MlivjKucLMgu8s4dJZvPAORmMJp6d/rwHygYGLFciA+Hy7m82Vf503Dpxz0djQcxGcKZH2+gDJ/6hoP+0B8YYHsNcniJG3DEU7NWs47vMM7vMM7vMM7vMP/E/wf2nPor4WcxyYAAAAASUVORK5CYII="
            alt="Movie" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Blood Group: {bloodGroup}</p>
            <p>Contact Number: {contact}</p>
            <div className="card-actions justify-start">
            <button className="btn">Contact</button>
            </div>
        </div>
        </div>
  )
}

Donor.protoTypes = {
    donor: PropTypes.array
}

export default Donor