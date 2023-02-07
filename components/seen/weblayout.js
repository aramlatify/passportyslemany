import { useEffect,useRef } from 'react';
import PageViews from './PageViews';
import * as Layout from "./layout";
import * as Styled from "./seen.style";
const BlogLayout = ({ slug }) => {

    const effctRan = useRef(false)

    useEffect(() => {
        
        if (effctRan.current === false)
        {
            const postuser = async () =>{

                const response = await fetch(`/api/views/${slug}`, {
                    method: 'POST'
                });
            }
            postuser()
        
      
        return ()=>{
            
            effctRan.current = true
        }}
    }, [slug]);


    return (
        <div>
        <Styled.MainContainer>
          <Styled.BlockWrapper>
      <Styled.Wrapper>
        <Layout.Row>
          <Styled.Name>ژمارەی سەردانی کەرانی مەڵپەر</Styled.Name>
        </Layout.Row>
        <Layout.Column>
          <Styled.Stats>
            <Styled.Stat>
              
            <Styled.Label> </Styled.Label>
            </Styled.Stat>
            <Styled.Data> <PageViews slug={slug} /> </Styled.Data>
            <Styled.Stat>
            <Styled.Label>جار</Styled.Label>
             
             
            </Styled.Stat>
            <Styled.Label>بینراوە</Styled.Label>
           
            <Styled.Stat>
            
              
            </Styled.Stat>
          </Styled.Stats>
        </Layout.Column>
      </Styled.Wrapper>
    </Styled.BlockWrapper>
           
    </Styled.MainContainer>
        </div>
      );
    };
    export default BlogLayout;
