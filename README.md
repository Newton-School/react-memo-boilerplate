# Why re-render footer

In this app we have a simple counter and Footer component(in App being used as MemoizedFooter)
we see in console, whenever we update counter, the Footer also re-renders even though it is not changing

To prevent that memoize Footer using React.memo