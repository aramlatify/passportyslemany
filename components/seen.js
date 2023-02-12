import { useEffect,useRef } from 'react';
import Views from './view';
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
        
          <Styled.BlockWrapper>
      <Styled.Wrapper>
        <Layout.Row>
          <Styled.Name>ژمارەی سەردانی کەرانی مەڵپەر</Styled.Name>
        </Layout.Row>
        <Layout.Column>
          <Styled.Stats>
            
            <Styled.Data> <Views slug={slug} /> </Styled.Data>
            <Styled.Stat>
            <Styled.Label>جار</Styled.Label>
             
             
            </Styled.Stat>
            <Styled.Stat><Styled.Label>بینراوە</Styled.Label>
           </Styled.Stat>
            
            
          </Styled.Stats>
        </Layout.Column>
      </Styled.Wrapper>
    </Styled.BlockWrapper>
           
 
        </div>
      );
    };
    export default BlogLayout;
