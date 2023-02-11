const handler = async (req, res) => {
  if (req.query.secret !== process.env.NEXT_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    await res.revalidate("/index");

  const pathToRevalidate = `/${
    req.body?.record?.id || req.body?.old_record?.id
  }`;
  await res.revalidate(pathToRevalidate);

  return res.send({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
  
};

export default handler;

