import { useRef, useEffect } from 'react'
import { styled } from 'styled-components'
import { useAppContext } from '../../App'
import IssueItem from './IssueItem'
import adbanner from '../../assets/adbanner.webp'

function IssueList() {
  const { issues, isEndOfPage, isLoading, getIssues } = useAppContext()
  const scrollTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollTarget && scrollTarget.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              observer.unobserve(entry.target)
              getIssues()
            }
          })
        },
        { threshold: 1 }
      )

      intersectionObserver.observe(scrollTarget.current)
      return () => intersectionObserver.disconnect()
    }
  }, [scrollTarget, isLoading])

  return (
    <StyledUl>
      {issues.map((issue, index) => (
        <>
          <StyledLi>
            <IssueItem
              key={issue.number}
              number={issue.number}
              title={issue.title}
              author={issue.user.login}
              created_at={issue.created_at}
              comments={issue.comments}
            />
          </StyledLi>
          {(index + 1) % 4 === 0 && (
            <StyledLi>
              <a href="https://www.wanted.co.kr/">
                <StyledAdBanner src={adbanner} />
              </a>
            </StyledLi>
          )}
        </>
      ))}
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <div ref={scrollTarget}>
          {isEndOfPage ? '가져올 데이터가 없어요!' : '스크롤 해서 데이터 가져오기'}
        </div>
      )}
    </StyledUl>
  )
}

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
  gap: 16px;
`

const StyledLi = styled.li`
  background-color: lightcyan;
`

const StyledAdBanner = styled.img`
  width: 100px;
`

export default IssueList
