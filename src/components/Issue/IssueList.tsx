import { useRef, useEffect } from 'react'
import { useAppContext } from '../../App'
import * as S from './IssueList.styled'
import IssueItem from './IssueItem'
import AdBanner from './AdBanner'

function IssueList() {
  const { issues, isEndOfPage, isLoading, errorMsg, getIssues } = useAppContext()
  const scrollTarget = useRef<HTMLDivElement>(null)

  const isAdPosition = (index: number) => {
    return (index + 1) % 4 === 0
  }

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
    <S.IssueList>
      {issues.map((issue, index) => (
        <>
          <IssueItem
            key={issue.number}
            number={issue.number}
            title={issue.title}
            author={issue.user.login}
            created_at={issue.created_at}
            comments={issue.comments}
          />
          {isAdPosition(index) && <AdBanner />}
        </>
      ))}
      {isLoading && !errorMsg ? (
        <div>로딩중</div>
      ) : (
        <div ref={scrollTarget}>{isEndOfPage && '가져올 데이터가 없어요!'}</div>
      )}
      {errorMsg}
    </S.IssueList>
  )
}

export default IssueList
